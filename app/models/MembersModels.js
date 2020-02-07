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
}
exports.MemberModels = MemberModels;
//# sourceMappingURL=MembersModels.js.map