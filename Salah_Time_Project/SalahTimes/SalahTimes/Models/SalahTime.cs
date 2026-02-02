using System;
using System.Collections.Generic;

namespace SalahTimes.Models;

public partial class SalahTime
{
    public int Id { get; set; }

    public int CityId { get; set; }

    public DateOnly Date { get; set; }

    public TimeOnly Fajr { get; set; }

    public TimeOnly Dhuhr { get; set; }

    public TimeOnly Asr { get; set; }

    public TimeOnly Maghrib { get; set; }

    public TimeOnly Isha { get; set; }

    public virtual City? City { get; set; }

}
