"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class MailerService {
  constructor(nodemailer) {
    this.nodemailer = nodemailer;
  }

  sendMail(user) {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = yield _this.nodemailer.createTestAccount(); // create reusable transporter object using the default SMTP transport

        let transporter = _this.nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false,
          // true for 465, false for other ports
          auth: {
            user: testAccount.user,
            // generated ethereal user
            pass: testAccount.pass // generated ethereal password

          }
        }); // send mail with defined transport object


        let info = yield transporter.sendMail({
          from: '"Fred Foo 👻" <foo@example.com>',
          // sender address
          to: user.email,
          // list of receivers
          subject: "Hello ✔",
          // Subject line
          text: "Hello world?",
          // plain text body
          html: "<b>Hello world?</b>" // html body

        });
        console.log("Message sent: %s", info.messageId); // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview only available when sending through an Ethereal account

        console.log("Preview URL: %s", _this.nodemailer.getTestMessageUrl(info));
      } catch (err) {
        throw new Error('Unable to send the email verification');
      } // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    })();
  }

}

var _default = MailerService;
exports.default = _default;