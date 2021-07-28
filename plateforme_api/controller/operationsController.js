/* eslint-disable object-curly-newline */
const { HTTP, isEmpty } = require('../Helper');
const { createOperation, findAllOperationsByTid, findOneOperation, updateOperation } = require('../queries/operationsQuery');
const { findOneTransaction, updateTransaction } = require('../queries/transactionQuery');
const { sendToMarchand } = require('../services/AxiosApi');

exports.createOperation = async (req, res) => {
  try {
    const { type, tid } = req.body;

    if (isEmpty([type, tid])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }

    const operation = await createOperation({
      type,
      transactionId: tid,
      status: 'created',
    });

    return res.status(HTTP.OK).json({
      data: { operation },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

exports.getOperations = async (req, res) => {
  try {
    const { tid } = req.query;

    if (isEmpty([tid])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }

    const operations = await findAllOperationsByTid(tid);
    return res.status(HTTP.OK).json({
      data: { operations },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

exports.getOperation = async (req, res) => {
  try {
    const { oid } = req.params;

    if (isEmpty([oid])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }
    const operation = await findOneOperation(oid);

    return res.status(HTTP.OK).json({
      data: { operation },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};

exports.updateOperation = async (req, res) => {
  try {
    const { status } = req.body;
    const { oid } = req.params;

    if (isEmpty([status, oid])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }
    const keys = { status };
    await updateOperation(keys, oid);
    const operation = await findOneOperation(oid);

    return res.status(HTTP.OK).json({
      data: { operation },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};
exports.validateOperation = async (req, res) => {
  try {
    const { oid } = req.params;

    if (isEmpty([oid])) {
      return res.status(HTTP.BAD_REQUEST).json({ error: 'BAD_REQUEST' });
    }
    await updateOperation({ status: 'ok' }, oid);
    const operation = await findOneOperation(oid);

    const transaction = await findOneTransaction(operation.transactionId);
    await updateTransaction({ status: 'ok' }, transaction.id);

    await sendToMarchand(transaction.commandId, 'ok');

    return res.status(HTTP.OK).json({
      data: { operation },
    });
  } catch (error) {
    return res.status(HTTP.SERVER_ERROR).json({ error });
  }
};
