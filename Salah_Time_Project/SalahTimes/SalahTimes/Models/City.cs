using System;
using System.Collections.Generic;

namespace SalahTimes.Models;

public partial class City
{
    public int Id { get; set; }

    public string CityName { get; set; } = null!;

    public string? Country { get; set; }

    public double Latitude { get; set; }

    public double Longitude { get; set; }

    public string Timezone { get; set; } = null!;

    public virtual ICollection<SalahTime> SalahTimes { get; set; } = new List<SalahTime>();
}
