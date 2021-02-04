import cron from 'node-cron';
import dateFormatter from './dateformater';
/**
 *This function is a scheduler that accepts expression and a callback function
 and returns error object and data
 *
 * @param {*} { expression, callback }
 * @return {*} {error, data}
 */
const scheduleJob = ({ expression, callback, start }) => {
  const isValid = cron.validate(expression);
  if (!isValid) {
    return {
      error: {
        message: 'The cron expression is invalid',
      },
    };
  }

  if (typeof callback !== 'function') {
    return {
      error: {
        message: 'The callback should be a function',
      },
    };
  }

  if (start && typeof callback !== 'boolean') {
    return {
      error: {
        message: 'start schedule should be either true or false',
      },
    };
  }
  const job = cron.schedule(expression, callback, {
    scheduled: start || false,
  });
  return {
    data: {
      status: true,
      message: `cron has been successfully scheduled to ${expression}`,
      job,
    },
  };
};

const cancelScheduledJob = (job) => {
  job.stop();
  console.log('job schedule cancelled!');
};

const startScheduledJob = (job) => {
  job.start();
  const { date } = dateFormatter({
    timestamp: new Date(),
  });
  console.log(`Job schedule started at ${date.fullDate}`);
};

export {
  scheduleJob,
  cancelScheduledJob, startScheduledJob,
};
