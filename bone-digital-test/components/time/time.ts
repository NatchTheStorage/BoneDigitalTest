export enum TimePeriod {
  morning = "morning",
  afternoon = "afternoon",
  evening = "evening",
  night = "night",
  everything = "everything"
}

export type TimePeriodType = TimePeriod.morning | TimePeriod.afternoon | TimePeriod.evening | TimePeriod.night | TimePeriod.everything

export function CurrentTimePeriod(): TimePeriodType {
  const hour = new Date().getHours()
  if (hour >= 6 && hour < 11)
    return TimePeriod.morning;
  else if (hour >= 11 && hour < 17)
    return TimePeriod.afternoon;
  else if (hour >= 17 && hour < 22)
    return TimePeriod.evening;
  else if (hour >= 22 || hour < 6)
    return TimePeriod.night;
  return TimePeriod.everything;
}