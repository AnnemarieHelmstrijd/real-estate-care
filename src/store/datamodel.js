class DamageReport {
  constructor(json) {
    this.json = json;
  }

  get actionRequired() {
    return this.json["actionRequired"] ? "Yes" : "No";
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

  get actionRequired() {
    return this.json["actionRequired"] ? "Yes" : "No";
  }
}

class ModificationReport {
  constructor(json) {
    this.json = json;
  }

  get actionRequired() {
    return this.json["actionRequired"] ? "Yes" : "No";
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

class InstallationReport {
  constructor(json) {
    this.json = json;
  }

  get location() {
    return this.json["location"];
  }

  get type() {
    switch (this.json["type"]) {
      case 0:
        return "Koeling";
      case 1:
        return "Verwarming";
      case 2:
        return "Luchtverversing";
      case 3:
        return "Elektra";
      case 4:
        return "Beveiliging";

      default:
        return "";

    }
  }

  get approved(){
    return this.json["approved"] ? "Yes" : "No";
  }

  get malfunctions() {
    return this.json["malfunctions"];
  }

  get test(){
    return this.json["test"];
  }

  get notes(){
    return this.json["notes"];
  }
}

class CompletedReport {
  constructor(json) {
    this.location = json["location"];
    this.date = json["date"];
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

  getDate() {
    return this.date;
  }

  getLocation() {
    return this.location
  }

  getDamageReport() {
    return this.damageReport;
  }

  getMaintenanceReport() {
    return this.maintenanceReport;
  }

  getInstallationReport(){
    return this.installationReport;
  }
}

function buildReports(reportJson) {
  return new CompletedReport(reportJson);
}

export default class DataModel {
  constructor(database = null) {
    if (database) {
      this.completedReports = database["completedReports"].map(buildReports).sort((a, b) => {
        return new Date(a.getDate()) - new Date(b.getDate());
      });
      this.scheduledReports = database["scheduledReports"].map(buildReports);
    }
  }

  getCompletedReports() {
    return this.completedReports;
  }

  // set completedReports(completedReports) {
  //   this.completedReports = completedReports;
  // }

  // get completedReports() {
  //   return this.completedReports;
  // }
}
