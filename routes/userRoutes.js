const express=require('express')
const router=express.Router();
const { login, userSignup, adminSignup }=require('../controllers/authController.js')
const { modifyDetails, deleteUser } = require('../controllers/modifyDetailsController.js')
const {checkRole} = require('../middlewares/auth.js')


router.post('/login',login)
router.post('/user/signup', userSignup)
router.post('/admin/signup', adminSignup);
router.post('/details/update',checkRole,modifyDetails);
router.post('/user/delete', checkRole, deleteUser);

module.exports = router