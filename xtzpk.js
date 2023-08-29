const { cryptoUtils } = require('sotez');

const generate = async () => {
  // Generate a new random mnemonic
  const mnemonic = cryptoUtils.generateMnemonic();
  // 'raw peace visual boil prefer rebel anchor right elegant side gossip enroll force salmon between'

  const keys = await cryptoUtils.generateKeys(mnemonic, 'bip39_seed_password');
  // {
  //   sk: string;
  //   pk: string;
  //   pkh: string;
  // }

  const encryptedSecretKey = cryptoUtils.encryptSecretKey(keys.sk, 'password');
console.log(encryptedSecretKey);
  return {
    ...keys,
    esk: encryptedSecretKey,
  };
};

generate();
