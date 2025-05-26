
import fs from 'node:fs/promises';

const logMessage = async (message) => {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} - ${message}\n`;

  await fs.appendFile('log.txt', logEntry);
};

export default logMessage;

