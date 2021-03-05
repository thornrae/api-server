'use strict';

module.exports = (req, res, next) => {
  console.log('request info:PATH/METHOD ', req.path, req.method);
  next();
}