const cors = require('cors');
const express = require('express');
const { handleRouteError } = require('./handler/routeErrorHnadler');
// const combinedModuleRoutes = require('@modules/index');

const router = express.Router();

router.use(cors());

router.use('/health', (req, res) => {
  res.send({ status: 'OK' });
});

// router.use(combinedModuleRoutes);

router.use(handleRouteError);

module.exports = router;
