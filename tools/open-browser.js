import browserSync from 'browser-sync';
import { chalkProcessing } from './chalk-config';

require('dotenv').config();

console.log(chalkProcessing('Opening in browser...'));

browserSync({
  port: Number(process.env.PORT) + 1,
  host: 'local.lineage2.com',
  proxy: 'http://localhost:' + process.env.PORT,
  open: 'external',
  watch: false,
  ui: false,
  callbacks: {
    ready: function (err, bs) {
      process.exit()
    }
  }
});
