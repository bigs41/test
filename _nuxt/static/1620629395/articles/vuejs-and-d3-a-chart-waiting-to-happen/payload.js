__NUXT_JSONP__(articles/vuejs-and-d3-a-chart-waiting-to-happen", {data:[{article:{id:3,status:"published",created_on:"2020-01-23T15:35:25+00:00",title:"Vue.js and D3: A Chart Waiting To Happen",introduction:"\u003Cp\u003EThis article is the summary of a talk I gave at the Vue.js Antwerp meetup. For a while now, D3.js has been the go-to JavaScript library for creating custom data visualizations. However, it&rsquo;s sometimes perceived as difficult to get started with or unsuitable for small projects. In this article I will show you how combining D3 and Vue can make your quest for the perfect data visualization a whole lot easier.\u003C\u002Fp\u003E",content:"\u003Cfigure\u003E\u003Ciframe id=\"talk_frame_506814\" class=\"wide\" style=\"border: 0; padding: 0; background: transparent;\" src=\"\u002F\u002Fspeakerdeck.com\u002Fplayer\u002Fcdacbd922db34e72a62bf35dec27d95b\" width=\"710\" height=\"399\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"\u003E\u003C\u002Fiframe\u003E\u003C\u002Ffigure\u003E\n\u003Cp\u003ERight now, I&rsquo;m working on a project called uman.ai, together with \u003Ca href=\"http:\u002F\u002Fml6.eu\u002F\" target=\"_blank\" rel=\"noreferrer noopener\"\u003EML6\u003C\u002Fa\u003E, a Ghent-based company specialized in Machine Learning. \u003Ca href=\"http:\u002F\u002Fuman.ai\u002F\" target=\"_blank\" rel=\"noreferrer noopener\"\u003EUman.ai\u003C\u002Fa\u003E explores new ways of gaining insight in talents and skills within organizations with the help of Artificial Intelligence. I took on the challenge to find a good interactive visualization for this model.\u003C\u002Fp\u003E\n\u003Cp\u003EAfter making some first rough sketches, I started exploring well-known existing libraries like \u003Cstrong\u003EChart.js\u003C\u002Fstrong\u003E and \u003Cstrong\u003EHighcharts\u003C\u002Fstrong\u003E. However, none of them turned out to be a good fit for this very specific situation. And this is where \u003Ca href=\"http:\u002F\u002Fd3js.org\u002F\" target=\"_blank\" rel=\"noreferrer noopener\"\u003E \u003Cstrong\u003ED3.js\u003C\u002Fstrong\u003E \u003C\u002Fa\u003E got in and I first got the idea for this talk.\u003C\u002Fp\u003E\n\u003Ch2\u003ED3.js\u003C\u002Fh2\u003E\n\u003Cp\u003ED3 had always felt kind of unfeasable for me. Most of the demo projects I saw were impressive, but they also looked pretty hard to recreate. For a long time I was convinced D3 was only suited for large and complex projects. I turned out to be wrong.\u003C\u002Fp\u003E\n\u003Cp\u003EBefore diving into some code, let me quickly give you an overview of what D3 exactly is. D3 is short for \u003Cem\u003EData Driven Documents\u003C\u002Fem\u003E and calls itself \u003Cem\u003E&ldquo;a JavaScript library for manipulating documents based on data&rdquo;\u003C\u002Fem\u003E. D3 doesn&rsquo;t include any pre-built visualizations, but provides you with a lot of useful utilities. This list of utilities might look a little intimidating at first, but we will only need a few.\u003C\u002Fp\u003E\n\u003Cp\u003ED3 has a jQuery-like syntax when it comes to defining templates:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-javascript\"\u003E\u002F\u002F Add a  element for every data point\nconst leaf = svg.selectAll('g').data(circles)\n\n\u002F\u002F Append a styled  to every  element\nleaf\n  .append('circle')\n  .attr('id', d =&gt; d.data.id)\n  .attr('r', d =&gt; d.r)\n  .attr('fill-opacity', 0.7)\n  .attr('fill', d =&gt; d.data.color)\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EThis might work well most of the time, but it feels a little counter-intuitive when you&rsquo;re already using Vue.js in your project. With Vue.js, you&rsquo;re probably used to template code that has a close connection the actual HTML result. In the next part of this article, I will show you how to replace the rendering part in the D3 workflow with Vue&rsquo;s templating system we&rsquo;re already using.\u003C\u002Fp\u003E\n\u003Ch2\u003ELet's write some code\u003C\u002Fh2\u003E\n\u003Cp\u003EFor the sake of simplicity, I will use the example of a flower shop here. Let&rsquo;s start with Vue component with nothing more than an empty SVG element and some base data to start from.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-markup\"\u003E&lt;template&gt;\n  &lt;svg width=\"500\" height=\"500\"&gt;\n  &lt;\u002Fsvg&gt;\n&lt;\u002Ftemplate&gt;\n\n&lt;script&gt;\nexport default {\n  data() {\n    return {\n      flowers: [\n        {\n          name: 'Roses',\n          amount: 25,\n          color: '#cc2936'\n        },\n        {\n          name: 'Tulips',\n          amount: 40,\n          color: '#f2c640'\n        },\n        {\n          name: 'Daisies',\n          amount: 15,\n          color: '#2a93d4'\n        },\n        {\n          name: 'Narcissuses',\n          amount: 9,\n          color: '#F7AD0A'\n        }\n      ]\n    }\n  }\n}\n&lt;\u002Fscript&gt;\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EWe now need to find out the best way to:\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003ERender a circle for every type of flower\u003C\u002Fli\u003E\n\u003Cli\u003ESize the circles according to the amount of flowers\u003C\u002Fli\u003E\n\u003Cli\u003EGive each circle the right color\u003C\u002Fli\u003E\n\u003Cli\u003EFind the best position for each circle\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp\u003EThis last one is the trickiest one, since we will need some kind of algorithm to calculate the most optimal positions. The algorithm we need is called \u003Ca href=\"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FCircle_packing\" target=\"_blank\" rel=\"noreferrer noopener\"\u003ECircle Packing\u003C\u002Fa\u003E. One of the layout utilities D3 offers is the \u003Cstrong\u003Epack layout\u003C\u002Fstrong\u003E. It takes a data set (which is called a hierarchy here) and outputs a set of packed circles. Exactly what we need.\u003C\u002Fp\u003E\n\u003Cp\u003EHowever, for D3 to correctly parse our flower data, we have to pass it through in a specific format. Let&rsquo;s use a computed property to transform our original state:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-markup\"\u003E&lt;template&gt;\n  &lt;svg width=\"500\" height=\"500\"&gt;\n  &lt;\u002Fsvg&gt;\n&lt;\u002Ftemplate&gt;\n\n&lt;script&gt;\nexport default {\n  data() {\n    return {\n      flowers: [\n        {\n          name: 'Roses',\n          amount: 25,\n          color: '#cc2936'\n        },\n        {\n          name: 'Tulips',\n          amount: 40,\n          color: '#f2c640'\n        },\n        {\n          name: 'Daisies',\n          amount: 15,\n          color: '#2a93d4'\n        },\n        {\n          name: 'Narcissuses',\n          amount: 9,\n          color: '#F7AD0A'\n        }\n      ]\n    }\n  },\n  computed: {\n    transformedFlowerData() {\n      return {\n        name: 'Top Level',\n        children: this.flowers.map(flower =&gt; ({\n          ...flower,\n          parent: 'Top Level'\n        }))\n      }\n    }\n  }\n}\n&lt;\u002Fscript&gt;\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003ERight now, we have everything in place to start using some of D3&rsquo;s magic. Let&rsquo;s import only the parts we need and let D3 do its calculations.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-markup\"\u003E&lt;template&gt;\n  &lt;svg width=\"500\" height=\"500\"&gt;\n  &lt;\u002Fsvg&gt;\n&lt;\u002Ftemplate&gt;\n\n&lt;script&gt;\nimport { hierarchy, pack } from 'd3-hierarchy'\nexport default {\n  data() {\n    return {\n      flowers: [\n        {\n          name: 'Roses',\n          amount: 25,\n          color: '#cc2936'\n        },\n        {\n          name: 'Tulips',\n          amount: 40,\n          color: '#f2c640'\n        },\n        {\n          name: 'Daisies',\n          amount: 15,\n          color: '#2a93d4'\n        },\n        {\n          name: 'Narcissuses',\n          amount: 9,\n          color: '#F7AD0A'\n        }\n      ]\n    }\n  },\n  computed: {\n    transformedFlowerData() {\n      return {\n        name: 'Top Level',\n        children: this.flowers.map(flower =&gt; ({\n          ...flower,\n          parent: 'Top Level'\n        }))\n      }\n    },\n\n    layoutData() {\n      \u002F\u002F Generate a D3 hierarchy\n      const rootHierarchy =\n        hierarchy(this.transformedFlowerData)\n        .sum(d =&gt; d.size)\n        .sort((a, b) =&gt; {\n          return b.value - a.value\n        })\n      \u002F\u002F Pack the circles inside the viewbox\n      return pack()\n        .size([500, 500])\n        .padding(10)(rootHierarchy)\n    }\n  }\n}\n&lt;\u002Fscript&gt;\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EFinally, we can use the layoutData property to compose a template like we would in any other Vue component. Here we use the calculated layout values to add some labels, colors, transforms and sizes.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-markup\"\u003E&lt;template&gt;\n  &lt;svg width=\"500\" height=\"500\"&gt;\n    &lt;g\n      class=\"flower\"\n      v-for=\"flower in layoutData.children\"\n      :key=\"flower.data.name\"\n      :style=\"{\n        transform: `translate(${flower.x}px, ${flower.y}px)`\n      }\"\n    &gt;\n      &lt;circle\n        class=\"flower__circle\"\n        :r=\"flower.r\"\n        :fill=\"flower.data.color\"\n      \u002F&gt;\n      &lt;text class=\"flower__label&rdquo;&gt;\n        {{ flower.data.name }}\n      &lt;\u002Ftext&gt;\n    &lt;\u002Fg&gt;\n  &lt;\u002Fsvg&gt;\n&lt;\u002Ftemplate&gt;\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EAdding a simple CSS transition will make value changes animate smoothly:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-css\"\u003E.flower {\n  transition: transform 0.1s ease-in-out;\n}\n\n.flower__circle {\n  transition: r 0.1s ease-in-out;\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EThe chart now looks just as we intended. You can now expand your component functionality as you like, by adding some controls to alter the state for example:\u003C\u002Fp\u003E\n\u003Cfigure\u003E\u003Ciframe class=\"wide\" style=\"height: 500px; border: 0; border-radius: 4px; overflow: hidden;\" title=\"Vue.js and D3\" src=\"https:\u002F\u002Fcodesandbox.io\u002Fembed\u002F6lvzwvpjnn?fontsize=14\" sandbox=\"allow-modals allow-forms allow-popups allow-scripts allow-same-origin\"\u003E\u003C\u002Fiframe\u003E\u003C\u002Ffigure\u003E\n\u003Ch2\u003EConclusion\u003C\u002Fh2\u003E\n\u003Cp\u003ENothing is perfect of course, and there are three \u003Cstrong\u003Ecaveats\u003C\u002Fstrong\u003E to this technique you should know about.\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003EFor big sets of data, it gets more and more difficult to keep a good performance. Especially when using a lot of animations. However, this also applies when you&rsquo;re using D3 without Vue.js.\u003C\u002Fli\u003E\n\u003Cli\u003EFor simple and well-known chart formats, it might still be easier to just use something like Chart.js or Highcharts.\u003C\u002Fli\u003E\n\u003Cli\u003ESome more complex features of D3, like gravity-based animations, spring values or drag and drop-interactions might be a little harder to integrate this way. However, most of them will just work fine.\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp\u003ELuckily, this technique also has a lot of \u003Cstrong\u003Eadvantages\u003C\u002Fstrong\u003E:\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003EYour code stays very close to the actual result.\u003C\u002Fli\u003E\n\u003Cli\u003EThis makes experimenting easy and fast.\u003C\u002Fli\u003E\n\u003Cli\u003EYour code will blend very nicely with your existing Vue.js code.\u003C\u002Fli\u003E\n\u003Cli\u003EYour code will be very approachable. Even someone who only knows HTML and CSS will be able to make adjustments.\u003C\u002Fli\u003E\n\u003Cli\u003ESince you can also use Vue for mobile apps (with for example \u003Ca href=\"https:\u002F\u002Fnativescript.org\u002F\" target=\"_blank\" rel=\"noreferrer noopener\"\u003ENativeScript\u003C\u002Fa\u003Eor \u003Ca href=\"https:\u002F\u002Fweex.apache.org\u002F\" target=\"_blank\" rel=\"noreferrer noopener\"\u003EWeex\u003C\u002Fa\u003E) you can use D3 on virtually any platform that supports Vue.\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp\u003EI really hope next time your project needs some kind of custom out-of-the-box chart, you&rsquo;ll think of this talk and give D3 a chance. The rest will be up to your imagination.\u003C\u002Fp\u003E",tags:["css","d3","javascript","vuejs"],slug:"vuejs-and-d3-a-chart-waiting-to-happen",date:"2019-03-29",social_image:null}}],fetch:[],mutations:void 0});