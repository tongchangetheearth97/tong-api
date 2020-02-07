'use strict';
import Knex = require('knex');

export class PttypesModels {
    // select * from pttype
    listall(knex: Knex) {
        return knex('pttype');
    }

    listraw(knex: Knex) {
        let sql = 'select * from pttype';
        return knex.raw(sql);
    }
   //select*from member where cid = ?
    wherecid(knex: Knex, pttype: any) {
        return knex('pttype')
        .where('pttype',pttype)
    }
}