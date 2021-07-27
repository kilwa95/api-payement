/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
const { HTTP, isEmpty } = require('../Helper');
const { createUser } = require('../queries/usersQuery');
const { findAllMerchants , findMerchantById , updateMerchant } = require('../queries/merchantsQuery');
const oidcTokenHash = require('oidc-token-hash');

exports.createMerchant = async (req, res) => {
  console.log(req)
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

    return res.status(HTTP.CREATED).json({
      data: { user },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

exports.getListMerchants = async (req, res) => {
  try {
    const merchants = await findAllMerchants()
    console.log(merchants.map(item => item.toJSON()));
    return res.status(HTTP.OK).json({
      data: { merchants },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

// '/merchants/:mid(\\d+)'
exports.getMarchandInformations = async (req, res) => {
  console.log(req.params)
  try {
    const merchant = await findMerchantById(req.params)
    return res.status(HTTP.OK).json({
      data: { merchant },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

// '/merchants/:mid(\\d+)/validate'
// Validation manuelle du compte Générer un jeu de credentials (client_token & client_secret)
exports.valideteAccountMarchand = async (req, res) => {
  const access_token = 'YmJiZTAwYmYtMzgyOC00NzhkLTkyOTItNjJjNDM3MGYzOWIy9sFhvH8K_x8UIHj1osisS57f5DduL-ar_qw5jl3lthwpMjm283aVMQXDmoqqqydDSqJfbhptzw8rUVwkuQbolw';
  const body = { 
    clientToken: oidcTokenHash.generate(access_token, 'RS256'),
    clientSecret: oidcTokenHash.generate(access_token, 'HS384'),
    valid: true
  }
  try {
    await updateMerchant(body, req.params);
    const merchant = await findMerchantById(req.params);
    return res.status(HTTP.OK).json({
      data: { merchant },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }

};

// '/merchants/:mid(\\d+)/credentials'
// Credentials (les supprimer et d’en générer des nouveaux)
exports.generateNewCredentials = async (req, res) => {
  const access_token = 'YmJiZTAwYmYtMzgyOC00NzhkLTkyOTItNjJjNDM3MGYzOWIy9sFhvH8K_x8UIHj1osisS57f5DduL-ar_qw5jl3lthwpMjm283aVMQXDmoqqqydDSqJfbhptzw8rUVwkuQbolw';
  const body = { 
    clientToken: oidcTokenHash.generate(access_token, 'RS256'),
    clientSecret: oidcTokenHash.generate(access_token, 'HS384'),
  }
  try {
    await updateMerchant(body, req.params);
    const merchant = await findMerchantById(req.params);
    return res.status(HTTP.OK).json({
      data: { merchant },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }

};
