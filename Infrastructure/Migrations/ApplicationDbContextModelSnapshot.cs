﻿// <auto-generated />
using System;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Infrastructure.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            MySqlModelBuilderExtensions.AutoIncrementColumns(modelBuilder);

            modelBuilder.Entity("Core.Domain.Entities.Appointment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("AdditionalNotes")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<DateOnly>("AppointmentDate")
                        .HasColumnType("date");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("EndTime")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("HomeAddress")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("LocationOfAppointment")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("MobileNumber")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("NatureOfAppointment")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("StartTime")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Status")
                        .HasColumnType("longtext");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("WhatsappNumber")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("WorkAddress")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Appointments");
                });

            modelBuilder.Entity("Core.Domain.Entities.Patient", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Allergies")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Attachment")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("CurrentBodyWeight")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("HomeAddress")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Medications")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("MobileNumber")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Observations")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("PlanId")
                        .HasColumnType("int");

                    b.Property<int?>("SubscriptionId")
                        .HasColumnType("int");

                    b.Property<string>("SurgicalHistory")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("WeightGoal")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("WhatsappNumber")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("WorkAddress")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.HasIndex("PlanId");

                    b.HasIndex("SubscriptionId");

                    b.ToTable("Patients");
                });

            modelBuilder.Entity("Core.Domain.Entities.Payment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<decimal>("Amount")
                        .HasColumnType("decimal(65,30)");

                    b.Property<int>("PatientId")
                        .HasColumnType("int");

                    b.Property<DateTime>("PaymentDate")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("PlanId")
                        .HasColumnType("int");

                    b.Property<string>("TranRef")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.HasIndex("PatientId");

                    b.HasIndex("PlanId");

                    b.ToTable("Payments");
                });

            modelBuilder.Entity("Core.Domain.Entities.Plan", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(65,30)");

                    b.HasKey("Id");

                    b.ToTable("Plans");
                });

            modelBuilder.Entity("Core.Domain.Entities.Subscriptions", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime(6)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("tinyint(1)");

                    b.Property<int>("PatientId")
                        .HasColumnType("int");

                    b.Property<int>("PlanId")
                        .HasColumnType("int");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime(6)");

                    b.HasKey("Id");

                    b.HasIndex("PlanId");

                    b.ToTable("Subscriptions");
                });

            modelBuilder.Entity("Core.Domain.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Core.Domain.Entities.Patient", b =>
                {
                    b.HasOne("Core.Domain.Entities.Plan", "Plan")
                        .WithMany()
                        .HasForeignKey("PlanId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Domain.Entities.Subscriptions", "Subscriptions")
                        .WithMany()
                        .HasForeignKey("SubscriptionId");

                    b.Navigation("Plan");

                    b.Navigation("Subscriptions");
                });

            modelBuilder.Entity("Core.Domain.Entities.Payment", b =>
                {
                    b.HasOne("Core.Domain.Entities.Patient", "Patient")
                        .WithMany()
                        .HasForeignKey("PatientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Domain.Entities.Plan", "Plan")
                        .WithMany()
                        .HasForeignKey("PlanId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Patient");

                    b.Navigation("Plan");
                });

            modelBuilder.Entity("Core.Domain.Entities.Subscriptions", b =>
                {
                    b.HasOne("Core.Domain.Entities.Plan", "Plan")
                        .WithMany()
                        .HasForeignKey("PlanId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Plan");
                });
#pragma warning restore 612, 618
        }
    }
}
