'use strict';

import * as express from 'express';
const router = express.Router();
import { MemberModels } from '../models/members';

import { PttypesModels } from '../models/pttype';
const pttypeModels = new PttypesModels();
const membersModels = new MemberModels();

router.get('/', (req, res, next) => {
    res.render('index', { title: 'Member 😊' });
});

router.get('/all', (req, res, next) => {
    let db = req.db;
    membersModels.listall(db)
        .then((results) => {
            res.send({ ok: true, rows: results });
        })
        .catch(error => {
            res.send({ ok: false, error: error });
        });
});

router.get('/raw', (req, res, next) => {
    let db = req.db;
    membersModels.listraw(db)
        .then((results) => {
            res.send({ ok: true, rows: results });
        })
        .catch(error => {
            res.send({ ok: false, error: error });
        });
});

router.get('/show', async (req, res, next) => {
    let db = req.db;
    try {
        let rows = await membersModels.listall(db);
        res.send({ ok: true, rows: rows });
    }
    catch (error) {
        res.send({ ok: false, error: error.message });
    }
    finally {
        db.destroy();
    }
});


router.get('/showaw', async (req, res, next) => {
    let db = req.db;

    try {
        let rows = await membersModels.listall(db);
        res.send({ ok: true, rows: rows });
    } catch (error) {
        res.send({ ok: false, error: error.message });
    }
    finally {
        db.destroy();
    }

});
router.post('/showaw', async (req, res, next) => {
    let db = req.db;

    try {
        let rows = await pttypeModels.listall(db);
        res.send({ ok: true, rows: rows });
    } catch (error) {
        res.send({ ok: false, error: error.message });
    }
    finally {
        db.destroy();
    }

});
router.get('/showcid/:cid', async (req, res, next) => {
    let db = req.db;
    let cid = req.params.cid;
    try {
        let rows = await membersModels.wherecid(db, cid);
        res.send({ ok: true, rows: rows });
    } catch (error) {
        res.send({ ok: false, error: error.message });
    }
    finally {
        db.destroy();
    }

});
router.delete('/delete/:cid', async (req, res, next) => {
    let db = req.db;
    let cid = req.params.cid;
    console.log("get in this delete route");
    try {
        let rows = await membersModels.delete(db, cid);
        res.send({ ok: true, rows: rows });
    } catch (error) {
        res.send({ ok: false, error: error.message });
    }
    finally {
        db.destroy();
    }

});


router.put('/update/:cid', async (req, res, next) => {
    let db = req.db;
    let cid = req.params.cid;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let telephone = req.body.telephone;
    try {
        let rows = await membersModels.update(db, cid,firstname,lastname,telephone);
        res.send({ ok: true, rows: rows });
    } catch (error) {
        res.send({ ok: false, error: error.message });
    }
    finally {
        db.destroy();
    }

});


router.post('/add', async (req, res, next) => {
    let db = req.db;
    let cid = req.body.cid;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let telephone = req.body.telephone;

    let Datas: any = {
        cid: cid,
        firstname: firstname,
        lastname: lastname,
        telephone: telephone
    }

    console.log(Datas);

    try {
        let rows = await membersModels.addData(db, Datas);
        res.send({ ok: true, rows: rows });
    } catch (error) {
        res.send({ ok: false, error: error.message });
    }
    finally {
        db.destroy();
    }

});



export default router;
