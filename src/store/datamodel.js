class DamageReport {
  constructor(json) {
    this.json = json;
  }

  get actionRequired() {
    return this.json["actionRequired"];
  }

  get location() {
    return this.json["location"];
  }

  get type() {
    switch (this.json["type"]) {
      case 0:
        return "Moedwillig";
      case 1:
        return "Slijtage";
      case 2:
        return "Geweld";
      case 3:
        return "Normaal gebruik";
      case 4:
        return "Calamiteit";
      case 5:
        return "Anders";
      default:
        return "";
    }
  }

  get description() {
    return this.json["description"];
  }

  get newDamage() {
    return this.json["newDamage"] ? "Yes" : "No";
  }
}

class MaintenanceReport {
  constructor(json) {
    this.json = json;
  }

  get location() {
    return this.json["location"];
  }

  get cost() {
    switch (this.json["costs"]) {
      case 0:
        return "0 - 1500";
      case 1:
        return "1500 - 2000";
      case 2:
        return "2000 - 2500";
      case 3:
        return "2500 - ...";

      default:
        return "";
    }
  }

  get type() {
    switch (this.json["type"]) {
      case 0:
        return "Schilderwerk";
      case 1:
        return "Houtrot";
      case 2:
        return "Elektra";
      case 3:
        return "Leidingwerk";
      case 4:
        return "Beglazing";

      default:
        return "";
    }
  }
}

class ModificationReport {}

class InstallationReport {}

class Report {
  constructor(json) {
    if (json["damage"]) this.damageReport = new DamageReport(json["damage"]);
    else this.damageReport = null;

    if (json["maintenance"])
      this.maintenanceReport = new MaintenanceReport(json["maintenance"]);
    else this.maintenanceReport = null;

    if (json["modification"])
      this.modificationReport = new ModificationReport(json["modification"]);
    else this.modificationReport = null;

    if (json["installation"])
      this.installationReport = new InstallationReport(json["installation"]);
    else this.installationReport = null;
  }

  hasDamageReport() {
    return this.damageReport != null;
  }
}

function buildReports(reportJson) {
  return new Report(reportJson);
}

export default class DataModel {
  constructor(database = null) {
    if (database) {
      this.completedReports = database["completedReports"].map(buildReports);
      this.scheduledReports = database["scheduledReport"].map(buildReports);
    }
  }

  // set completedReports(completedReports) {
  //   this.completedReports = completedReports;
  // }

  // get completedReports() {
  //   return this.completedReports;
  // }
}
