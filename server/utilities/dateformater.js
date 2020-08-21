/* eslint-disable prefer-destructuring */
// Returns {fullDate, time, error}

const dateFormatter = ({ timestamp, options }) => {
  if (!timestamp) {
    return {
      error: {
        message: 'enter a valid timestamp',
      },
    };
  }
  try {
    const datefrom = new Date(timestamp);
    const date = datefrom.getDate();
    const month = datefrom.getMonth();
    const year = datefrom.getFullYear();

    const mapper = {
      dd: date,
      mo: month,
      yy: year,
    };

    if (options) {
      const { delimiter, showPM } = options;
      let { pattern } = options;
      const realDate = (date <= 9 ? `0${date}` : date) + delimiter + (month <= 9 ? `0${month}` : month) + delimiter + year;

      if (pattern) {
        pattern = pattern.toLowerCase().trim();
        const datePattern = pattern.split(' ')[0].split('-');
        // Validations
        if (datePattern.length !== 3 || (!datePattern.includes('dd') || !datePattern.includes('mo') || !datePattern.includes('yy'))) {
          return {
            error: {
              message: 'pattern should be in the format dd-mo-yy  // dd for date, mo for month, yy for year',
            },
          };
        }
        let timePattern = pattern.split(' ');
        if (timePattern[1]) {
          timePattern = timePattern[1].split(':');
          if (!timePattern.includes('hh') || !timePattern.includes('mm') || !timePattern.includes('ss')) {
            return {
              error: {
                message: 'time pattern should be in the format hh:mm:ss which can be rearranged accordingly. hh should be in 24hours',
              },
            };
          }
        }

        // End of validation
        const construct = `${mapper[datePattern[0]]}${delimiter || ' '}${mapper[datePattern[1]]}${delimiter || ' '}${mapper[datePattern[2]]}`;
        return {
          date: {
            fullDate: construct,
            time: datefrom.toLocaleTimeString('en-US', {
              hour12: showPM,
            }),
          },
        };
      }
      return {
        date: {
          fullDate: realDate,
          time: datefrom.toLocaleTimeString('en-US', {
            hour12: showPM,
          }),

        },
      };
    }
    return {
      date: {
        fullDate: datefrom.toLocaleString(),
        time: datefrom.toLocaleTimeString(),
      },
    };
  } catch (err) {
    return {
      error: {
        message: 'could not parse the timestamp',
      },
    };
  }
};

export default dateFormatter;
