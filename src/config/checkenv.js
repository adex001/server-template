/* eslint-disable no-restricted-syntax */

/**
 * This function checks the environment variables if they all exist. If they do not, throws an error
 */

const requiredEnvs = ['DB_URL', 'NODE_ENV'];

function checkEnvironments() {
  for (const env of requiredEnvs) {
    if (!Object.keys(process.env).includes(env)) {
      throw new Error(`${env} needs to be included in the environment variables`);
    }
    // sanitizeEnvs(env);
  }
  console.log('environment check complete!');
  return null;
}

export default checkEnvironments;
