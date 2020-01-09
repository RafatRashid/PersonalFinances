const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const cors = require('cors');
const fs = require('fs');

const port = '8080';
const financeStore = './finances.json';

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());

server.get('/api/finances', (req, res) => {
  let raw = fs.readFileSync(financeStore);
  let finances = JSON.parse(raw).finances;
  finances = Object.keys(finances).map(id => {
    finances[id].id = id
    return finances[id]
  })
  return res.json({ finances });
});

server.get('/api/finance', (req, res) => {
  let { financeId } = req.query;

  let raw = fs.readFileSync(financeStore);
  let financeDetails = JSON.parse(raw).financeDetails[financeId.toString()];

  return res.json({ financeDetails: financeDetails ? financeDetails : [] });
});

server.post('/api/finance', (req, res) => {
  let { financeId } = req.body;
  let { financeDetail } = req.body;
  let fileContent = fs.readFileSync(financeStore);
  let raw = JSON.parse(fileContent);

  let finance = raw.finances[financeId];
  let financeDetails = raw.financeDetails[financeId];
  financeDetails = financeDetails == null ? [] : financeDetails;
  let currentFinanceDetailId = raw.financeDetailId;

  financeDetail.detailId = (parseInt(currentFinanceDetailId) + 1).toString();
  financeDetails.push(financeDetail);

  finance = updateFinance(finance, financeDetails);
  raw.financeDetails[financeId] = financeDetails;
  raw.finances[financeId] = finance;
  raw.financeDetailId = financeDetail.detailId.toString();

  try {
    fs.writeFileSync(financeStore, JSON.stringify(raw));
    return res.json({
      financeId,
      financeDetail
    });
  }
  catch (ex) {
    return res.status(500).json({ message: ex })
  }
})

server.put('/api/finance', (req, res) => {
  let { financeId } = req.body;
  let { financeDetail } = req.body;
  let fileContent = fs.readFileSync(financeStore);
  let raw = JSON.parse(fileContent);

  let finance = raw.finances[financeId];
  let financeDetails = raw.financeDetails[financeId];
  let detailIndex = financeDetails.findIndex(x => x.detailId == financeDetail.detailId)
  
  financeDetails[detailIndex] = financeDetail
  finance = updateFinance(finance, financeDetails);

  raw.finances[financeId] = finance;
  raw.financeDetails[financeId] = financeDetails;

  try {
    fs.writeFileSync(financeStore, JSON.stringify(raw));
    return res.json({
      financeId,
      financeDetail
    });
  }
  catch (ex) {
    return res.status(500).json({ message: ex })
  }
})

let updateFinance = (finance, financeDetails) => {
  let ins = financeDetails.filter(x => x.transactionType === 'in')
  let outs = financeDetails.filter(x => x.transactionType === 'out')

  finance.noOfTransactions = financeDetails.length;
  
  finance.totalInAmount = 0;
  ins.forEach(inDetail => finance.totalInAmount += parseInt(inDetail.amount));
  
  finance.totalOutAmount = 0;
  outs.forEach(outDetail => finance.totalOutAmount += parseInt(outDetail.amount));

  return finance;
}

server.listen(port, () => console.log('listening on ', port));