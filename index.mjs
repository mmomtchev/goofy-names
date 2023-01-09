import sha1 from 'simple-sha1';
import names from './names.json';

export default function getName(s) {
  const hash = sha1.sync(s);
  const left = names.left[Number(BigInt(`0x${hash.substring(0, 16)}`) % BigInt(names.left.length))];
  const right = names.right[Number(BigInt(`0x${hash.substring(16, 32)}`) % BigInt(names.right.length))];

  return left + ' ' + right;
}
