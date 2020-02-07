'use strict';
import Knex = require('knex');

export class MemberModels {
    // select * from members
    listall(knex: Knex) {
        return knex('members');
    }

    listraw(knex: Knex) {
        let sql = 'select * from members';
        return knex.raw(sql);
    }
   //select*from member where cid = ?
    wherecid(knex: Knex, cid: any) {
        return knex('members')
        .where('cid',cid)
    }
    delete(knex: Knex, cid: any) {
        return knex('members')
        .where('cid',cid)
        .del()
    }

    // การอัพเดทข้อมูลแบมีเงื่อนไข
    // ถ้าเป็นคำสั่ง SQL คือ update members set telephone = ? where cid = ?
    update(knex: Knex, cid: any,firstname:any ,lastname:any,telephone:any) {
        return knex('members')
        .where('cid',cid)
        .update('firstname',firstname)
        .update('lastname',lastname)
        .update('telephone', telephone)
    }
    addData(knex: Knex,Datas: any) {
        return knex('members')
        .insert(Datas)
    }
}