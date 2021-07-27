const { HTTP, isEmpty } = require('../Helper');

// Créer des opérations, remboursement (partiel ou intégral)
exports.createOperation = async (req, res) => {
  try {
    const { params } = req.body; // req.params, req.query

    if (isEmpty([params])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }

    return res.status(HTTP.OK).json({
      data: {},
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

exports.getOperations = async (req, res) => {
  try {
    const { params } = req.body; // req.params, req.query

    if (isEmpty([params])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }

    return res.status(HTTP.OK).json({
      data: {},
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

exports.getOperation = async (req, res) => {
  try {
    const { params } = req.body; // req.params, req.query

    if (isEmpty([params])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }

    return res.status(HTTP.OK).json({
      data: {},
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

// Afficher l’historique des différents statuts de l’operation
exports.getOperationHistory = async (req, res) => {
  try {
    const { params } = req.body; // req.params, req.query

    if (isEmpty([params])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }

    return res.status(HTTP.OK).json({
      data: {},
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

// recevoir les notifications de validation d’opérations par le PSP
exports.validateOperation = async (req, res) => {
  try {
    const { params } = req.body; // req.params, req.query

    if (isEmpty([params])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }

    return res.status(HTTP.OK).json({
      data: {},
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};
