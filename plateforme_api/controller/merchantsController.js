/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
const { HTTP, isEmpty } = require('../Helper');
const { createUser } = require('../queries/usersQuery');
const { findAllMerchants, findMerchantById, updateMerchant } = require('../queries/usersQuery');
const { generateClientTokens } = require('./securityController');
const emailService = require('../services/email');

exports.createMerchant = async (req, res) => {
  try {
    const { email, password, companyName, kbis, tel, site, urlConfirmation, urlAnnulation, quote } = req.body;

    if (isEmpty([email, password, companyName, kbis, site, urlConfirmation, urlAnnulation, quote])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }

    const newUser = {
      email,
      password,
      companyName,
      kbis,
      tel,
      site,
      urlConfirmation,
      urlAnnulation,
      quote,
      valid: false,
      role: 'merchant',
      clientToken: '',
      clientSecret: '',
    };

    const user = await createUser(newUser);
    const infos = emailService.send({
      to: email,
      subject: 'inscription au platforme de payemet',
      text: 'votre compte est en attdant de validation par notre admin',
    });

    return res.status(HTTP.CREATED).json({
      data: { user, infos },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};
exports.createAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (isEmpty([email, password])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }

    const newUser = {
      email,
      password,
      companyName: email,
      kbis: email,
      tel: 'admin',
      site: 'admin',
      urlConfirmation: 'admin',
      urlAnnulation: 'admin',
      quote: '',
      valid: true,
      role: 'admin',
      clientToken: '',
      clientSecret: '',
    };

    const user = await createUser(newUser);

    return res.status(HTTP.CREATED).json({
      data: { user },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

exports.getListMerchants = async (req, res) => {
  try {
    const merchants = await findAllMerchants();
    return res.status(HTTP.OK).json({
      data: { merchants },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

exports.getMarchandInformations = async (req, res) => {
  try {
    const { mid } = req.params;
    const merchant = await findMerchantById(mid);
    merchant.password = undefined;
    return res.status(HTTP.OK).json({
      data: { merchant },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

exports.valideteAccountMarchand = async (req, res) => {
  try {
    const { mid } = req.params;
    const { clientToken, clientSecret } = generateClientTokens();
    const keys = { clientToken, clientSecret, valid: true };
    await updateMerchant(keys, mid);
    const merchant = await findMerchantById(mid);
    merchant.password = undefined;
    return res.status(HTTP.OK).json({
      data: { merchant },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

exports.generateNewCredentials = async (req, res) => {
  try {
    const { mid } = req.params;
    const { clientToken, clientSecret } = generateClientTokens();
    const keys = { clientToken, clientSecret };
    await updateMerchant(keys, mid);
    const merchant = await findMerchantById(mid);
    merchant.password = undefined;
    return res.status(HTTP.OK).json({
      data: { merchant },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};
