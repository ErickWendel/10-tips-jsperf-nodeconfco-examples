const { createWriteStream, createReadStream } = require('fs');

// const stm = createWriteStream('x.csv', { flags: 'a' });
// let counter = 0;
// while (counter < 1000) {
//   counter++;
//   stm.write(`erick-${counter};12${counter};1995${counter}\n`);
// }

// stm.end();

const SIZE_EACH_CHUNK = 1024;
const readStream = createReadStream('my-file.csv', {
  highWaterMark: SIZE_EACH_CHUNK,
  encoding: 'utf8',
});

// readStream.on('data', chunk => {
//   console.log(chunk.toString());
// });

// readStream.on('end', () => console.log('EOF'));

// (async () => {
//   const readStream = createReadStream('my-file.csv', {
//     highWaterMark: SIZE_EACH_CHUNK,
//     encoding: 'utf8',
//   });

//   for await (const chunk of readStream) {
//     console.log(`Read: ${chunk}`);
//   }
// })();

(async () => {
  for await (const chunk of fromLinesToNumberedLines(readStream)) {
    console.log(`Read: ${chunk}`);
  }
  console.log('EOF');
})();

async function* fromLinesToNumberedLines(lines) {
  for await (const line of lines) {
    for (const [name, id, date] of line.split(';')) {
      yield JSON.stringify({ name, id, date });
    }
  }
}
