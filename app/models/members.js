'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class MemberModels {
    listall(knex) {
        return knex('members');
    }
    listraw(knex) {
        let sql = 'select * from members';
        return knex.raw(sql);
    }
    wherecid(knex, cid) {
        return knex('members')
            .where('cid', cid);
    }
    delete(knex, cid) {
        return knex('members')
            .where('cid', cid)
            .del();
    }
    update(knex, cid, firstname, lastname, telephone) {
        return knex('members')
            .where('cid', cid)
            .update('firstname', firstname)
            .update('lastname', lastname)
            .update('telephone', telephone);
    }
    addData(knex, Datas) {
        return knex('members')
            .insert(Datas);
    }
}
exports.MemberModels = MemberModels;
//# sourceMappingURL=members.js.map