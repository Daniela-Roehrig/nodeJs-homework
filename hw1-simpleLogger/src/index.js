import logMessage from './logger.js';

(async () => {
  try {
    await logMessage('Homework started');
    await logMessage('Processing homework...');
    await logMessage('Homework done');
  } catch (err) {
    console.error('Logging failed:', err);
  }
  
})();
