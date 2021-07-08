const path = require('path')
var $this = this
    , fs = require('fs')
    , _ = require('lodash')
    , help = require('../utils/helpers')
    , moment = require('moment')
    , curriculumController = require('./curriculumController')
    , collect = require('collect.js')
    , ProgressBar = require('../utils/ProgressBar')
    , Bar = new ProgressBar()
const seq = require('../db')
const config = require('../config')
const setDay = 21


exports.syncWorkLine = async function (req, res, next) {
    try {
        var nonres = help.get(req, 'query.nonres', false) || false

        if (help.empty(res)) {
            nonres = true
        }
        var con = _.merge(help.get(req, 'con', {}), config)
        var host = (con.oracle.dbHost).split()
        var configConnect = {
            client: 'oracledb',
            connection: {
                host: `${_.head(host)}:${help.get(con, 'oracle.port', help.get(host, '1', '1521'))}`,
                user: `${help.get(con, 'oracle.username', 'admin')}`,
                password: `${help.get(con, 'oracle.password', 'admin')}`,
                database: `${help.get(con, 'oracle.servername', 'admin')}`,
            }
        }
        var knex = require('knex')(configConnect);
        var get = {}
            , db = help.get(con, 'oracle.database', 'sync')
            , tb = help.get(con, 'oracle.view.VIEW_USERS_WORK_LINE', 'VIEW_USERS_WORK_LINE')
        await seq.transaction(async t => {
            get = await knex.select('*').table(`${db}.${tb}`)
            await help.query('VIEW_USERS_WORK_LINE').truncate()
            let collectionList = collect(get)
            let setItems = 2000
            for (let index = 1; index <= Math.ceil(get.length / setItems); index++) {
                const element = collectionList.forPage(index, setItems).all();
                if (!help.empty(element)) {
                    await help.query('VIEW_USERS_WORK_LINE').bulkCreate(element)
                } else {
                    break;
                }
            }
        })
        knex.destroy()
        if (nonres) {
            return get
        } else {
            return res.json(get)
        }
    } catch (error) {
        if (help.empty(next)) {
            if (!help.empty(req.con.debug)) {
                throw error
            } else {
                return {}
            }
        } else {
            next(error);
        }
    }
}

exports.syncSection = async function (req, res, next) {
    try {
        var nonres = help.get(req, 'query.nonres', false) || false

        if (help.empty(res)) {
            nonres = true
        }
        var con = _.merge(help.get(req, 'con', {}), config)
        var host = (con.oracle.dbHost).split()
        var knex = require('knex')({
            client: 'oracledb',
            connection: {
                host: `${_.head(host)}:${help.get(con, 'oracle.port', help.get(host, '1', '1521'))}`,
                user: `${help.get(con, 'oracle.username', 'admin')}`,
                password: `${help.get(con, 'oracle.password', 'admin')}`,
                database: `${help.get(con, 'oracle.servername', 'admin')}`,
            }
        });

        var get = {}
            , db = help.get(con, 'oracle.database', 'sync')
            , tb = help.get(con, 'oracle.view.VIEW_USERS_SECTION', 'VIEW_USERS_SECTION')
        await seq.transaction(async t => {
            get = await knex.select('*').table(`${db}.${tb}`)
            await help.query('VIEW_USERS_SECTION').truncate()
            let collectionList = collect(get)
            let setItems = 2000
            for (let index = 1; index <= Math.ceil(get.length / setItems); index++) {
                const element = collectionList.forPage(index, setItems).all();
                if (!help.empty(element)) {
                    await help.query('VIEW_USERS_SECTION').bulkCreate(element)
                } else {
                    break;
                }
            }
        })
        knex.destroy()
        if (nonres) {
            return get
        } else {
            return res.json(get)
        }
    } catch (error) {
        if (help.empty(next)) {
            if (!help.empty(req.con.debug)) {
                throw error
            } else {
                throw error
            }
        } else {
            next(error);
        }
    }
}
exports.syncMeCee = async function (req, res, next) {
    try {
        var nonres = help.get(req, 'query.nonres', false) || false

        if (help.empty(res)) {
            nonres = true
        }
        var con = _.merge(help.get(req, 'con', {}), config)
        var host = (con.oracle.dbHost).split()
        var knex = require('knex')({
            client: 'oracledb',
            connection: {
                host: `${_.head(host)}:${help.get(con, 'oracle.port', help.get(host, '1', '1521'))}`,
                user: `${help.get(con, 'oracle.username', 'admin')}`,
                password: `${help.get(con, 'oracle.password', 'admin')}`,
                database: `${help.get(con, 'oracle.servername', 'admin')}`,
            }
        });

        var get = {}
            , db = help.get(con, 'oracle.database', 'sync')
            , tb = help.get(con, 'oracle.view.VIEW_USERS_ME_CEE', 'VIEW_USERS_ME_CEE')
        await seq.transaction(async t => {
            get = await knex.select('*').table(`${db}.${tb}`)
            await help.query('VIEW_USERS_ME_CEE').truncate()
            let collectionList = collect(get)
            let setItems = 2000
            for (let index = 1; index <= Math.ceil(get.length / setItems); index++) {
                const element = collectionList.forPage(index, setItems).all();
                if (!help.empty(element)) {
                    await help.query('VIEW_USERS_ME_CEE').bulkCreate(element)
                } else {
                    break;
                }
            }
        })
        knex.destroy()
        if (nonres) {
            return get
        } else {
            return res.json(get)
        }
    } catch (error) {
        if (help.empty(next)) {
            if (!help.empty(req.con.debug)) {
                throw error
            } else {
                return {}
            }
        } else {
            next(error);
        }
    }
}
exports.syncJob = async function (req, res, next) {
    try {
        var nonres = help.get(req, 'query.nonres', false) || false

        if (help.empty(res)) {
            nonres = true
        }
        var con = _.merge(help.get(req, 'con', {}), config)
        var host = (con.oracle.dbHost).split()
        var knex = require('knex')({
            client: 'oracledb',
            connection: {
                host: `${_.head(host)}:${help.get(con, 'oracle.port', help.get(host, '1', '1521'))}`,
                user: `${help.get(con, 'oracle.username', 'admin')}`,
                password: `${help.get(con, 'oracle.password', 'admin')}`,
                database: `${help.get(con, 'oracle.servername', 'admin')}`,
            }
        });

        var get = {}
            , db = help.get(con, 'oracle.database', 'sync')
            , tb = help.get(con, 'oracle.view.VIEW_USERS_JOB', 'VIEW_USERS_JOB')
        await seq.transaction(async t => {
            get = await knex.select('*').table(`${db}.${tb}`)
            await help.query('VIEW_USERS_JOB').truncate()
            let collectionList = collect(get)
            let setItems = 2000
            for (let index = 1; index <= Math.ceil(get.length / setItems); index++) {
                const element = collectionList.forPage(index, setItems).all();
                if (!help.empty(element)) {
                    await help.query('VIEW_USERS_JOB').bulkCreate(element)
                } else {
                    break;
                }
            }
        })
        knex.destroy()
        if (nonres) {
            return get
        } else {
            return res.json(get)
        }
    } catch (error) {
        if (help.empty(next)) {
            if (!help.empty(req.con.debug)) {
                throw error
            } else {
                return {}
            }
        } else {
            next(error);
        }
    }
}
exports.syncDivision = async function (req, res, next) {
    try {
        var nonres = help.get(req, 'query.nonres', false) || false

        if (help.empty(res)) {
            nonres = true
        }
        var con = _.merge(help.get(req, 'con', {}), config)
        var host = (con.oracle.dbHost).split()
        var knex = require('knex')({
            client: 'oracledb',
            connection: {
                host: `${_.head(host)}:${help.get(con, 'oracle.port', help.get(host, '1', '1521'))}`,
                user: `${help.get(con, 'oracle.username', 'admin')}`,
                password: `${help.get(con, 'oracle.password', 'admin')}`,
                database: `${help.get(con, 'oracle.servername', 'admin')}`,
            }
        });

        var get = {}
            , db = help.get(con, 'oracle.database', 'sync')
            , tb = help.get(con, 'oracle.view.VIEW_USERS_DIVISION', 'VIEW_USERS_DIVISION')
        await seq.transaction(async t => {
            get = await knex.select('*').table(`${db}.${tb}`)
            await help.query('VIEW_USERS_DIVISION').truncate()
            let collectionList = collect(get)
            let setItems = 2000
            for (let index = 1; index <= Math.ceil(get.length / setItems); index++) {
                const element = collectionList.forPage(index, setItems).all();
                if (!help.empty(element)) {
                    await help.query('VIEW_USERS_DIVISION').bulkCreate(element)
                } else {
                    break;
                }
            }

        })
        knex.destroy()
        if (nonres) {
            return get
        } else {
            return res.json(get)
        }
    } catch (error) {
        if (help.empty(next)) {
            if (!help.empty(req.con.debug)) {
                throw error
            } else {
                return {}
            }
        } else {
            next(error);
        }
    }
}
exports.syncDepartment = async function (req, res, next) {
    try {
        var nonres = help.get(req, 'query.nonres', false) || false

        if (help.empty(res)) {
            nonres = true
        }
        var con = _.merge(help.get(req, 'con', {}), config)
        var host = (con.oracle.dbHost).split()
        var knex = require('knex')({
            client: 'oracledb',
            connection: {
                host: `${_.head(host)}:${help.get(con, 'oracle.port', help.get(host, '1', '1521'))}`,
                user: `${help.get(con, 'oracle.username', 'admin')}`,
                password: `${help.get(con, 'oracle.password', 'admin')}`,
                database: `${help.get(con, 'oracle.servername', 'admin')}`,
            }
        });

        var get = {}
            , db = help.get(con, 'oracle.database', 'sync')
            , tb = help.get(con, 'oracle.view.VIEW_USERS_DEPARTMENT', 'VIEW_USERS_DEPARTMENT')
        await seq.transaction(async t => {
            get = await knex.select('*').table(`${db}.${tb}`)
            await help.query('VIEW_USERS_DEPARTMENT').truncate()
            let collectionList = collect(get)
            let setItems = 2000

            for (let index = 1; index <= Math.ceil(get.length / setItems); index++) {
                const element = collectionList.forPage(index, setItems).all();
                if (!help.empty(element)) {
                    await help.query('VIEW_USERS_DEPARTMENT').bulkCreate(element)
                } else {
                    break;
                }
            }
        })
        knex.destroy()
        if (nonres) {
            return get
        } else {
            return res.json(get)
        }
    } catch (error) {
        if (help.empty(next)) {
            if (!help.empty(req.con.debug)) {
                throw error
            } else {
                return {}
            }
        } else {
            next(error);
        }
    }
}
exports.syncUsers = async function (req, res, next) {
    try {
        var nonres = help.get(req, 'query.nonres', false) || false

        if (help.empty(res)) {
            nonres = true
        }


        var con = _.merge(help.get(req, 'con', {}), config)
        var host = (con.oracle.dbHost).split()
        var knex = require('knex')({
            client: 'oracledb',
            connection: {
                host: `${_.head(host)}:${help.get(con, 'oracle.port', help.get(host, '1', '1521'))}`,
                user: `${help.get(con, 'oracle.username', 'admin')}`,
                password: `${help.get(con, 'oracle.password', 'admin')}`,
                database: `${help.get(con, 'oracle.servername', 'admin')}`,
            }
        });

        var get = {}
            , db = help.get(con, 'oracle.database', 'sync')
            , tb = help.get(con, 'oracle.view.VIEW_USERS', 'VIEW_USERS')
        if(moment().format('DD')==setDay){
            await seq.query(`DROP TABLE IF EXISTS VIEW_USERS_OLD`);
            await seq.query(`CREATE TABLE VIEW_USERS_OLD LIKE VIEW_USERS`);
            await seq.query(`INSERT VIEW_USERS_OLD SELECT * FROM VIEW_USERS`);
        }
        await seq.transaction(async t => {
            get = await knex.select('*').table(`${db}.${tb}`)
            await help.query('VIEW_USERS').truncate()
            let collectionList = collect(get)
            let setItems = 3000
            // let datalength = 0
            // Bar.init(get.length)

            for (let index = 1; index <= Math.ceil(get.length / setItems); index++) {
                const element = collectionList.forPage(index, setItems).all();
                if (!help.empty(element)) {
                    // datalength = datalength+element.length
                    // Bar.update(datalength)
                    // console.log(element.length);

                    await help.query('VIEW_USERS').bulkCreate(element)
                } else {
                    break;
                }
            }
        })
        knex.destroy()
        if (nonres) {
            return get
        } else {
            return res.json(get)
        }
    } catch (error) {
        if (help.empty(next)) {
            if (!help.empty(req.con.debug)) {
                throw error
            } else {
                throw error
            }
        } else {
            next(error);
        }
    }
}

exports.moveToOrg = async function (req, res, next) {
    try {
        var nonres = help.get(req, 'query.nonres', false) || false
        if (help.empty(res)) {
            nonres = true
        }
        var get = {}

        let dataDEPARTMENT = await help.query('VIEW_USERS_DEPARTMENT').except(['id']).toJson()
        let dataDIVISION = await help.query('VIEW_USERS_DIVISION').except(['id']).toJson()
        let dataSECTION = await help.query('VIEW_USERS_SECTION').except(['id']).toJson()
        let dataJOB = await help.query('VIEW_USERS_JOB').except(['id']).toJson()
        let dataOrg = await help.query('ml_organization_group').toJson()
        let listOrg = []
        let listCode = [
            "DEPARTMENT_CODE",
            "DIVISION_CODE",
            "SECTION_CODE",
            "JOB_CODE"
        ]
        for (let [DEPARTMENT_INDEX,DEPARTMENT] of Object.entries(dataDEPARTMENT)) {
            // console.log(DEPARTMENT);

            // DEPARTMENT.DEPARTMENT_NAME = (DEPARTMENT.DEPARTMENT_NAME).replace('-', '')
            DEPARTMENT.sorting = help.getNumber(DEPARTMENT_INDEX)+1
            DEPARTMENT.org = collect(dataOrg).filter(org => {
                return (org.code).match(/^.[0-9]+.[0-9]+.$/g) && org.name == DEPARTMENT.DEPARTMENT_NAME
            }).map(org => {
                let code = []
                for (const [key, val] of Object.entries(listCode)) {
                    org[`${val}`] = help.get(DEPARTMENT, `${val}`, '00')
                    code.push(org[`${val}`])
                }
                org.description = _.join(code, '-')
                return org
            }).first()
            if (!help.empty(DEPARTMENT.org)) {
                listOrg.push(DEPARTMENT.org)
            }
            DEPARTMENT.code = help.get(DEPARTMENT, 'org.code', `.`)
            DEPARTMENT.DIVISIONLIST = collect(dataDIVISION).filter(division => {
                return division.DEPARTMENT_CODE == DEPARTMENT.DEPARTMENT_CODE
            }).all()
            if (!help.empty(DEPARTMENT.DIVISIONLIST)) {
                for (let [DIVISION_INDEX,DIVISION] of Object.entries(DEPARTMENT.DIVISIONLIST)) {
                    DIVISION.org = collect(dataOrg).filter(org => {
                        return (org.code).match(new RegExp(`^${DEPARTMENT.code}+`, 'g')) && org.name == DIVISION.DIVISION_NAME
                    }).map(org => {
                        let code = []
                        for (const [key, val] of Object.entries(listCode)) {
                            org[`${val}`] = help.get(DIVISION, `${val}`, '00')
                            code.push(org[`${val}`])
                        }
                        org.description = _.join(code, '-')
                        return org
                    }).first()
                    if (!help.empty(DIVISION.org)) {
                        listOrg.push(DIVISION.org)
                    }
                    DIVISION.sorting = help.getNumber(DIVISION_INDEX)+1
                    DIVISION.code = help.get(DIVISION, 'org.code', DEPARTMENT.code)
                    DIVISION.SECTIONLIST = collect(dataSECTION).filter(section => {
                        return section.DEPARTMENT_CODE == DIVISION.DEPARTMENT_CODE && section.DIVISION_CODE == DIVISION.DIVISION_CODE
                    }).all()
                    if (!help.empty(DIVISION.SECTIONLIST)) {
                        for (let [SECTION_INDEX,SECTION] of Object.entries(DIVISION.SECTIONLIST)) {
                            SECTION.org = collect(dataOrg).filter(org => {
                                return (org.code).match(new RegExp(`^${DIVISION.code}+`, 'g')) && org.name == SECTION.SECTION_NAME
                            }).map(org => {
                                let code = []
                                for (const [key, val] of Object.entries(listCode)) {
                                    org[`${val}`] = help.get(SECTION, `${val}`, '00')
                                    code.push(org[`${val}`])
                                }
                                org.description = _.join(code, '-')
                                return org
                            }).first()
                            if (!help.empty(SECTION.org)) {
                                listOrg.push(SECTION.org)
                            }
                            SECTION.sorting = help.getNumber(SECTION_INDEX)+1
                            SECTION.code = help.get(SECTION, 'org.code', DIVISION.code)
                            SECTION.JOBLIST = collect(dataJOB).filter(job => {
                                return job.DEPARTMENT_CODE == SECTION.DEPARTMENT_CODE && job.DIVISION_CODE == SECTION.DIVISION_CODE && job.SECTION_CODE == SECTION.SECTION_CODE
                            }).all()
                            for (const [JOB_INDEX,JOB] of Object.entries(SECTION.JOBLIST)) {
                                JOB.sorting = help.getNumber(JOB_INDEX)+1
                                JOB.org = collect(dataOrg).filter(org => {
                                    return (org.code).match(new RegExp(`^${SECTION.code}+`, 'g')) && org.name == JOB.JOB_NAME
                                }).map(org => {
                                    let code = []
                                    for (const [key, val] of Object.entries(listCode)) {
                                        org[`${val}`] = help.get(JOB, `${val}`, '00')
                                        code.push(org[`${val}`])
                                    }
                                    org.description = _.join(code, '-')
                                    return org
                                }).first()
                                if (!help.empty(JOB.org)) {
                                    listOrg.push(JOB.org)
                                }
                            }
                        }
                    }
                }
            }
        }
        let inId = help.pluck(listOrg, 'id')
        
        
        let notIn = collect(dataOrg).whereNotIn('id', inId)
            .map(org => {
                let collection = collect((org.code).split('.')).filter().all()
                let code = (org.code).replace(`${org.id}.`, '')
                let back = {}
                if (!help.empty(collection)) {
                    delete collection[(collection.length - 1)]
                    collection = help.filter(collection)
                    code = `.${_.join(collection, '.')}.`
                    back = collect(listOrg).filter(li => {
                        return (li.code).match(new RegExp(`${code}`, 'g'))
                    }).first()
                    if (help.empty(back) && !help.empty(collection)) {
                        delete collection[(collection.length - 1)]
                        collection = help.filter(collection)
                        code = `.${_.join(collection, '.')}.`
                        back = collect(listOrg).filter(li => {
                            return (li.code).match(new RegExp(`${code}`, 'g'))
                        }).first()
                    }
                    if (help.empty(back) && !help.empty(collection)) {
                        delete collection[(collection.length - 1)]
                        collection = help.filter(collection)
                        code = `.${_.join(collection, '.')}.`
                        back = collect(listOrg).filter(li => {
                            return (li.code).match(new RegExp(`${code}`, 'g'))
                        }).first()
                    }
                    if (help.empty(back) && !help.empty(collection)) {
                        delete collection[(collection.length - 1)]
                        collection = help.filter(collection)
                        code = `.${_.join(collection, '.')}.`
                        back = collect(listOrg).filter(li => {
                            return (li.code).match(new RegExp(`${code}`, 'g'))
                        }).first()
                    }
                    if (help.empty(back) && !help.empty(collection)) {
                        delete collection[(collection.length - 1)]
                        collection = help.filter(collection)
                        code = `.${_.join(collection, '.')}.`
                        back = collect(listOrg).filter(li => {
                            return (li.code).match(new RegExp(`${code}`, 'g'))
                        }).first()
                    }
                    if (help.empty(back) && !help.empty(collection)) {
                        delete collection[(collection.length - 1)]
                        collection = help.filter(collection)
                        code = `.${_.join(collection, '.')}.`
                        back = collect(listOrg).filter(li => {
                            return (li.code).match(new RegExp(`${code}`, 'g'))
                        }).first()
                    }
                }
                for (const [key, val] of Object.entries(listCode)) {
                    org[`${val}`] = help.get(back, `${val}`, '00')
                }
                return org
            }).all()
          console.log(listOrg.length,notIn.length)  
        let totle = listOrg.length+notIn.length
        // let datalength = 0
        // Bar.init(totle)
        for (const organization of listOrg) {
            await help.query('ml_organization_group')
                .find(organization.id)
                .save(
                    help.only(organization, help.except(
                        help.query('ml_organization_group').getAttributes(), ['id', 'createdAt', 'updatedAt']
                    ))
                )
                // datalength = datalength+1
                // Bar.update(datalength)
        }
        for (const organization of notIn) {
            await help.query('ml_organization_group')
                .find(organization.id)
                .save(
                    help.only(organization, help.except(
                        help.query('ml_organization_group').getAttributes(), ['id', 'createdAt', 'updatedAt']
                    ))
                )
                // datalength = datalength+1
                // Bar.update(datalength)
        }
        // console.log(dataOrg);

        get = dataOrg
        if (nonres) {
            return get
        } else {
            return res.json(get)
        }
    } catch (error) {
        if (help.empty(next)) {
            throw error
        } else {
            next(error);
        }
    }
}
exports.moveToPosition = async function (req, res, next) {
    try{
        var nonres = help.get(req, 'query.nonres', false) || false

        if (help.empty(res)) {
            nonres = true
        }
        var get = {}
        if (help.empty(req)) {
            req = {
                input: {}
            }
        }

        await seq.transaction(async t => {
          let work = await help.query('VIEW_USERS_WORK_LINE').except(["id", "createdAt", "updatedAt"]).toJson()
        //   Bar.init(work.length)
          let numWork = 1
          for (const position of work) {
            let pos = await help.query('ml_position').where('position', position.WORK_LINE_NAME).createUpdate(
              {
                position: position.WORK_LINE_NAME,
                status: 'enable',
                WORK_LINE_CODE: position.WORK_LINE_CODE,
              }
            )
            let pos_tang = await help.query('ml_position_tang').where('positionId',pos.id).first()
            let name = help.get(pos_tang,'name','ยังไม่ระบุ')
            await help.query('ml_position_tang').where('positionId',pos.id).createUpdate({
                positionId:pos.id,
                name
            })
            numWork = numWork+1
            // Bar.update(numWork)
          }
          get = work
        })

        if (nonres) {
            return get
        } else {
            return res.json(get)
        }

    } catch (error) {
        if (help.empty(next)) {
            throw error
        } else {
            next(error);
        }
    }
}
exports.moveToUsers = async function (req, res, next) {
    try {
        var nonres = help.get(req, 'query.nonres', false) || false
        if (help.empty(res)) {
            nonres = true
        }
        var get = {}
        if (help.empty(req)) {
            req = {
                input: {}
            }
        }

        let ver = 0
        let version = await seq.query("SELECT @@VERSION AS 'version'")
        version = collect(_.head(version)).first()
        version = _.head((help.get(version, 'version', '0')).split('-'))
        ver = parseFloat(version)
        let user = []
        let isManager = help.reqJsonConverte(help.get(req.input,'',[]))
        // if (ver >= 10.3) {
        //     let tb1 = 'VIEW_USERS', tb2 = 'VIEW_USERS_OLD';
        //     user = _.head(await seq.query(`
        //         (SELECT ID_CARD,EMAIL,TITLE,FIRST_NAME,LAST_NAME,BIRTHDAYS,TEL,WORK_LINE_CODE,DEPARTMENT_CODE,DIVISION_CODE,SECTION_CODE,JOB_CODE,MP_CEE,USER_TYPE FROM ${tb1})
        //         EXCEPT
        //         (SELECT ID_CARD,EMAIL,TITLE,FIRST_NAME,LAST_NAME,BIRTHDAYS,TEL,WORK_LINE_CODE,DEPARTMENT_CODE,DIVISION_CODE,SECTION_CODE,JOB_CODE,MP_CEE,USER_TYPE FROM ${tb2})
        //         `))
        //     user = JSON.parse(JSON.stringify(user))
        //     req.input.page = help.get(req, 'input.page', 1)
        //     req.input.limit = help.get(req, 'input.limit', 100)
        //     if (help.empty(user)) {
        //         let check = _.head(await seq.query(`(SELECT ID_CARD FROM VIEW_USERS)
        //         EXCEPT
        //         (SELECT empCode FROM ml_user)`)); // add user
        //         check = JSON.parse(JSON.stringify(check))
        //         user = await help.query('VIEW_USERS')
        //             // .where('ID_CARD', help.pluck(check, 'ID_CARD'))
        //             .except(["id", "createdAt", "updatedAt"])
        //             .limit(req.input.limit)
        //             .params(req.input)
        //             .toJson({offset:((req.input.page-1)*req.input.limit)})
        //             // console.log('is_data1',user.length)

        //     }else{
                
        //         user = collect(user).forPage(req.input.page,req.input.limit).all()
        //         // console.log('is_data2')
        //     }

        // } else {

        //     req.input.page = help.get(req, 'input.page', 1)
        //     user = await help.query('VIEW_USERS')
        //         .except(["id", "createdAt", "updatedAt"])
        //         .limit(req.input.limit)
        //         .params(req.input)
        //         .toJson({offset:((req.input.page-1)*req.input.limit)})
        //         // console.log('is_data3')

        // }
        user = await help.query('VIEW_USERS')
            .where('DEPARTMENT_CODE',req.input.code)

            .limit(req.input.limit)
            .params(req.input)
            .toJson({offset:((req.input.page-1)*req.input.limit)})
        let totle = user.length
        // let datalength = 0
        // Bar.init(totle)
        // var password = bcrypt.hash('123456')
        for (let row of user) {
            //group
            var gender = help.get(row,'TITLE',null);
            var genderBy = gender=='นาย'?'m':'f';
            var userTypes = row.USER_TYPE == 1?'ข้าราชการ':'บุคลากร กทม.'
            if(row.USER_TYPE==1){
                userTypes = 'ข้าราชการ'
            }
            if(row.USER_TYPE==2){
                userTypes = 'บุคลากร กทม.'
            }
            if(row.USER_TYPE==6){
                userTypes = 'บุคลากรทั่วไป'
            }
            if (help.empty(row.DEPARTMENT_CODE) && help.empty(row.DIVISION_CODE) && help.empty(row.SECTION_CODE) && help.empty(row.JOB_CODE)) {
                let users = await help.query('ml_user').where(help.only(row, [
                    ['EMAIL', 'email'],
                    ['ID_CARD', 'empCode'],
                ])).first()
                if (help.empty(users)) {
                    await help.query('ml_user').where(help.only(row, [
                        ['EMAIL', 'email'],
                        ['ID_CARD', 'empCode'],
                    ])).createUpdate({
                        status: 1,
                        roleId: 3,
                        lang: 'en',
                        gender: genderBy,
                        prefix: row.TITLE,
                        name: row.FIRST_NAME,
                        lastname: row.LAST_NAME,
                        mobile: row.TEL,
                        email: row.EMAIL,
                        empCode: row.ID_CARD,
                        userType: userTypes,
                        birth: moment(row.BIRTHDAYS).format('YYYY-MM-DD HH:mm:ss')
                    })
                }
            } else {

                let group = await help.query('ml_organization_group').where(help.only(row, ['DEPARTMENT_CODE', 'DIVISION_CODE', 'SECTION_CODE', 'JOB_CODE'])).first()
                if (help.empty(group)) {
                    group = await help.query('ml_organization_group').where(help.only(row, ['DEPARTMENT_CODE', 'DIVISION_CODE', 'SECTION_CODE'])).first()
                }
                if (help.empty(group)) {
                    group = await help.query('ml_organization_group').where(help.only(row, ['DEPARTMENT_CODE', 'DIVISION_CODE'])).first()
                }
                if (help.empty(group)) {
                    group = await help.query('ml_organization_group').where(help.only(row, ['DEPARTMENT_CODE'])).first()
                }
                row.group = group
                //position
                let tang = await help.query('VIEW_USERS_ME_CEE').where(help.only(row, [['MP_CEE', 'MP_CE_CODE']])).except(["id", "createdAt", "updatedAt"]).first()

                let position = await help.query('ml_position').where(help.only(row, ['WORK_LINE_CODE'])).first()
                if (help.empty(group)) {
                    let users = await help.query('ml_user').where(help.only(row, [
                        ['EMAIL', 'email'],
                        ['ID_CARD', 'empCode'],
                    ])).first()
                    if (help.empty(users)) {
                        await help.query('ml_user').where(help.only(row, [
                            ['EMAIL', 'email'],
                            ['ID_CARD', 'empCode'],
                        ])).createUpdate({
                            status: 1,
                            roleId: 3,
                            lang: 'en',
                            gender: genderBy,
                            prefix: row.TITLE,
                            name: row.FIRST_NAME,
                            lastname: row.LAST_NAME,
                            mobile: row.TEL,
                            email: row.EMAIL,
                            empCode: row.ID_CARD,
                            userType: userTypes,
                            birth: moment(row.BIRTHDAYS).format('YYYY-MM-DD HH:mm:ss')
                        })
                    }
                } else {
                    if (help.empty(position)) {
                        let users = await help.query('ml_user').where(help.only(row, [
                            ['EMAIL', 'email'],
                            ['ID_CARD', 'empCode'],
                        ])).first()
                        if (help.empty(users)) {
                            await help.query('ml_user').where(help.only(row, [
                                ['EMAIL', 'email'],
                                ['ID_CARD', 'empCode'],
                            ])).createUpdate({
                                status: 1,
                                roleId: 3,
                                lang: 'en', 
                                gender: genderBy,
                                prefix: row.TITLE,
                                name: row.FIRST_NAME,
                                lastname: row.LAST_NAME,
                                mobile: row.TEL,
                                email: row.EMAIL,
                                empCode: row.ID_CARD,
                                userType: userTypes,
                                birth: moment(row.BIRTHDAYS).format('YYYY-MM-DD HH:mm:ss')
                            })
                        }
                    } else {

                        let orgPosition = await help.query('ml_organization_position').where('groupId', group.id).where('positionId', position.id).first()
                        if (help.empty(orgPosition)) {
                            orgPosition = await help.query('ml_organization_position').where('groupId', group.id).where('positionId', position.id).createUpdate(
                                {
                                    lvId: group.lvId,
                                    groupId: group.id,
                                    positionId: position.id
                                }
                            )
                        }

                        let users = await help.query('ml_user').where(help.only(row, [
                            ['EMAIL', 'email'],
                            ['ID_CARD', 'empCode'],
                        ])).first()
                        if (help.empty(users)) {
                            users = await help.query('ml_user').where(help.only(row, [
                                ['EMAIL', 'email'],
                                ['ID_CARD', 'empCode'],
                            ])).createUpdate({
                                status: 1,
                                roleId: 3,
                                lang: 'en',
                                gender: genderBy,
                                prefix: row.TITLE,
                                name: row.FIRST_NAME,
                                lastname: row.LAST_NAME,
                                mobile: row.TEL,
                                email: row.EMAIL,
                                empCode: row.ID_CARD,
                                userType: userTypes,
                                birth: moment(row.BIRTHDAYS).format('YYYY-MM-DD HH:mm:ss')
                            })
                        }
                        let rankSet = [
                            'ระดับต้น', 'ระดับสูง', 'ระดับทรงคุณวุฒิ', 'ระดับเชี่ยวชาญ', 'ระดับชำนาญการพิเศษ', 'ระดับชำนาญการ', 'ระดับปฏิบัติการ', 'ระดับทักษะพิเศษ', 'ระดับอาวุโส', 'ระดับชำนาญงาน', 'ระดับปฏิบัติงาน'
                        ]
                        let rank = _.indexOf(rankSet, `ระดับ${tang.MP_CEE_POSITION}`) >= 0 ? `ระดับ${tang.MP_CEE_POSITION}` : 'ระดับต้น'
                        let $isManager = _.indexOf(isManager,row.ID_CARD)>=0?'true':'false'
                        let orgUser = await help.query('ml_organization_user')
                            .where('isAdmin', 'false')
                            .where('userId', users.id)
                            .where('groupId', group.id)
                            .createUpdate(
                                {
                                    userId: users.id, groupId: group.id, positionId: orgPosition.id, rank,isManager: $isManager, isAdmin: 'false', isScreener: 'false', codeOrg: group.code, organizationManagerId: 0
                                }
                            )
                    }
                }
                // console.log(row);
            }
            // datalength = datalength+1
            // Bar.update(((req.input.page-1)*req.input.limit)+datalength)
        }
        get = user
        if (nonres) {
            return get
        } else {
            return res.json(get)
        }
    } catch (error) {
        if (help.empty(next)) {
            throw error
        } else {
            next(error);
        }
    }
}

exports.syncAll = async function (req, res, next) {
    try {
        console.log('sync-oracle');
        var nonres = help.get(req, 'query.nonres', false) || false

        if (help.empty(res)) {
            nonres = true
        }

        var workLineStatus = false
        var config = {}
        if (!help.empty(req)) {
            if (!help.empty(req.input)) {
                if (!help.empty(req.input.host)) {
                    config['dbHost'] = req.input.host
                }
                if (!help.empty(req.input.port)) {
                    config['port'] = req.input.port
                }
                if (!help.empty(req.input.username)) {
                    config['username'] = req.input.username
                }
                if (!help.empty(req.input.password)) {
                    config['password'] = req.input.password
                }
                if (!help.empty(req.input.servername)) {
                    config['servername'] = req.input.servername
                }
                if (!help.empty(req.input.database)) {
                    config['database'] = req.input.database
                }
                if (!help.empty(req.input.debug)) {
                    config['debug'] = req.input.debug
                }
                if (!help.empty(req.input.VIEW_USERS_WORK_LINE)) {
                    _.merge(config, {
                        view: {
                            VIEW_USERS_WORK_LINE: req.input.VIEW_USERS_WORK_LINE
                        }
                    })
                }
                if (!help.empty(req.input.VIEW_USERS_SECTION)) {
                    _.merge(config, {
                        view: {
                            VIEW_USERS_SECTION: req.input.VIEW_USERS_SECTION
                        }
                    })
                }
                if (!help.empty(req.input.VIEW_USERS_ME_CEE)) {
                    _.merge(config, {
                        view: {
                            VIEW_USERS_ME_CEE: req.input.VIEW_USERS_ME_CEE
                        }
                    })
                }
                if (!help.empty(req.input.VIEW_USERS_JOB)) {
                    _.merge(config, {
                        view: {
                            VIEW_USERS_JOB: req.input.VIEW_USERS_JOB
                        }
                    })
                }
                if (!help.empty(req.input.VIEW_USERS_DIVISION)) {
                    _.merge(config, {
                        view: {
                            VIEW_USERS_DIVISION: req.input.VIEW_USERS_DIVISION
                        }
                    })
                }
                if (!help.empty(req.input.VIEW_USERS_DEPARTMENT)) {
                    _.merge(config, {
                        view: {
                            VIEW_USERS_DEPARTMENT: req.input.VIEW_USERS_DEPARTMENT
                        }
                    })
                }
                if (!help.empty(req.input.VIEW_USERS)) {
                    _.merge(config, {
                        view: {
                            VIEW_USERS: req.input.VIEW_USERS
                        }
                    })
                }
            }
        }


        var dataWorkLine = await $this.syncWorkLine({ con: config })

        workLineStatus = !help.empty(dataWorkLine)
        console.log(`syncWorkLine:${workLineStatus}`);


        var SectionStatus = false
        var dataSection = await $this.syncSection({ con: config })
        SectionStatus = !help.empty(dataSection)
        console.log(`syncSection:${SectionStatus}`);
        var MeCeeStatus = false
        var dataMeCee = await $this.syncMeCee({ con: config })
        MeCeeStatus = !help.empty(dataMeCee)
        console.log(`syncMeCee:${MeCeeStatus}`);

        var JobStatus = false
        var dataJob = await $this.syncJob({ con: config })
        JobStatus = !help.empty(dataJob)
        console.log(`syncJob:${JobStatus}`);

        var DivisionStatus = false
        var dataDivision = await $this.syncDivision({ con: config })
        DivisionStatus = !help.empty(dataDivision)
        console.log(`syncDivision:${DivisionStatus}`);

        var DepartmentStatus = false
        var dataDepartment = await $this.syncDepartment({ con: config })
        DepartmentStatus = !help.empty(dataDepartment)
        console.log(`syncDepartment:${DepartmentStatus}`);
        var UsersStatus = false
        var dataUsers = await $this.syncUsers({ con: config })
        UsersStatus = !help.empty(dataUsers)
        console.log(`syncUsers:${UsersStatus}`);

        if (!help.empty(DepartmentStatus) || !help.empty(DivisionStatus) || !help.empty(JobStatus) || !help.empty(SectionStatus)) {
            // console.log(!help.empty(DepartmentStatus) || !help.empty(DivisionStatus) || !help.empty(JobStatus) || !help.empty(SectionStatus));
            console.log(`moveToOrg:start`);
            await $this.moveToOrg()
            console.log(`moveToOrg:true`);
        }
        if (!help.empty(workLineStatus)) {
            console.log(`moveToPosition:start`);
            await $this.moveToPosition()
            console.log(`moveToPosition:true`);
        }
        if (!help.empty(UsersStatus)) {
            let DEPARTMENTALL = await help.query('VIEW_USERS_DEPARTMENT')
            // .where('DEPARTMENT_CODE',21)//set sync by DEPARTMENT
            .toJson()
            for (let $department of DEPARTMENTALL) {
                let countUser = await help.query('VIEW_USERS').where('DEPARTMENT_CODE',$department.DEPARTMENT_CODE).count()
                let setItems = 50
                let avgCeil = Math.ceil(countUser / setItems)
                console.log(`sync_user_by => ${$department.DEPARTMENT_NAME} (${countUser})`)
                // console.log(countUser)
                let user = await help.query('VIEW_USERS')
                    .where('DEPARTMENT_CODE','21')
                    .toJson(); 
                user = collect(user).map(r=>{
                    r.code = _.join([
                        help.get(r,'DEPARTMENT_CODE','00'),
                        help.get(r,'DIVISION_CODE','00'),
                        help.get(r,'SECTION_CODE','00'),
                        help.get(r,'JOB_CODE','00')
                    ],'.')
                    r.isManager = false;
                    return r
                    })
                    .groupBy('code')
                    .map((r,k)=>{
                    let items = r.items
                    let max = collect(items).max('MP_CEE')
                    let lan = collect(items).where('MP_CEE',`${max}`).count()
                    items = collect(items).map(i=>{
                        if(max==i.MP_CEE&&lan==1){
                        i.isManager = true;
                        }
                        return i;
                    }).all()
                
                    return { code:collect(_.head(items)).only(['DEPARTMENT_CODE','DIVISION_CODE','SECTION_CODE','JOB_CODE']).all(),hasManager:lan==1,list:items }
                    })
                    .values()
                    .all()
                    let notHasManager = collect(user).filter(r=>{
                    return !r.hasManager
                    }).all() || []
                    // notManager.push(notHasManager)

                    user = collect(user).pluck('list').collapse()
                    .filter(r=>{
                    return r.isManager
                    })
                    .pluck('ID_CARD')
                    .all()
                // Bar.init(countUser)
                for (let index = 1; index <= avgCeil; index++) {
                    await $this.moveToUsers({ input: { code:$department.DEPARTMENT_CODE, page: index, limit: setItems, managet: user } })
                }
                console.log("\n")
                console.log(`sync_user_success`)
                
            }
            console.log("\n")
            console.log(`sync finished ${moment().format('DD-MM-YY HH:mm:ss')}`)
            if(moment().format('DD')==setDay){
                let chkDisable  = _.head(await seq.query(`
                (SELECT ID_CARD FROM VIEW_USERS_OLD)
                EXCEPT
                (SELECT ID_CARD FROM VIEW_USERS)
                `))
                chkDisable = help.pluck(chkDisable,'ID_CARD')
                if(!help.empty(chkDisable)){
                  chkDisable = await help.query('ml_user').where('empCode',chkDisable).except(["createdAt","updatedAt","password","forgotPass"]).toJson()
                }
            }
//             console.log(`moveToUsers:start`);
//             let countUser = await help.query('VIEW_USERS').count()
//             let setItems = 50
//             let avgCeil = Math.ceil(countUser / setItems)

// // await $this.moveToUsers({ input: { page: 1, limit: 12 } })
//             Bar.init(countUser)
//             for (let index = 1; index <= avgCeil; index++) {
//                 await $this.moveToUsers({ input: { page: index, limit: setItems } })
//                 // Bar.update(index)
//             }
//             console.log(`moveToUsers:true`);
        }

        if (nonres) {
            return 'success'
        } else {
            return res.json('success')
        }
    } catch (error) {
        if (help.empty(next)) {
            throw error
        } else {
            next(error);
        }
    }
}