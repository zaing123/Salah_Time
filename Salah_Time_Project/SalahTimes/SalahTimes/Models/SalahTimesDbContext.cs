using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace SalahTimes.Models;

public partial class SalahTimesDbContext : DbContext
{
    public SalahTimesDbContext()
    {
    }

    public SalahTimesDbContext(DbContextOptions<SalahTimesDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<City> Cities { get; set; }

    public virtual DbSet<SalahTime> SalahTimes { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-38MV66U;Database=SalahTimesDB;Trusted_Connection=True;Encrypt=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<City>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Cities__3214EC078304BDED");

            entity.Property(e => e.CityName).HasMaxLength(100);
            entity.Property(e => e.Country).HasMaxLength(100);
            entity.Property(e => e.Timezone).HasMaxLength(50);
        });

        modelBuilder.Entity<SalahTime>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__SalahTim__3214EC0765BB41A6");

            entity.HasOne(d => d.City).WithMany(p => p.SalahTimes)
                .HasForeignKey(d => d.CityId)
                .HasConstraintName("FK__SalahTime__CityI__3C69FB99");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Users__3214EC07DC86E767");

            entity.HasIndex(e => e.Email, "UQ__Users__A9D1053447B75741").IsUnique();

            entity.Property(e => e.Email).HasMaxLength(150);
            entity.Property(e => e.PasswordHash).HasMaxLength(255);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
