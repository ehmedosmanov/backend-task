import moment from "moment";

const discountUtil = (menuItem, date) => {
    if (menuItem.rate && menuItem.rate.isEnabled) {
        const schedule = menuItem.rate.schedule;

        if (schedule.isActive) {
            const discountDate = moment(date);
            const scheduleFrom = moment(schedule.from);
            const scheduleTo = moment(schedule.to);

            if (discountDate.isBetween(scheduleFrom, scheduleTo, null, '[]')) {
                const weekdays = schedule.weekdays;
                const dayOfWeek = discountDate.format('dddd').toLowerCase();
                const daySchedule = weekdays[dayOfWeek];

                if (daySchedule && daySchedule.isWorking) {
                    if (menuItem.rate.isFixed) {
                        menuItem.priceSell -= menuItem.rate.amount;
                    } else {
                        menuItem.priceSell -= (menuItem.priceSell * menuItem.rate.amount) / 100;
                    }
                }
            }
        }
    }
    return menuItem;
};


export default discountUtil

