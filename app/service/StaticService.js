const request = require('../commons/Request');

const baseUrl = `${process.env.STATIC_SERVICE_URL}`;

module.exports = {
  getJobTypeById: (jobtypeId) => {
    const getJobTypeUrl = `${baseUrl}/api/v1/jobtype`;
    return request.get(getJobTypeUrl, { jobtypeId });
  },

  getEducationLevelById: (educationLevelId) => {
    const getEducationLevelUrl = `${baseUrl}/api/v1/education`;
    return request.get(getEducationLevelUrl, { educationLevelId });
  },

  getEducationGroupById: (educationGroupId) => {
    const getEducationGroupUrl = `${baseUrl}/api/v1/education-group`;
    return request.get(getEducationGroupUrl, { educationGroupId });
  },

  getRegionById: (regionId) => {
    const getRegionUrl = `${baseUrl}/api/v1/region`;
    return request.get(getRegionUrl, { regionId });
  },

  getProvinceById: (proviceId) => {
    const getProvinceUrl = `${baseUrl}/api/v1/province`;
    return request.get(getProvinceUrl, { proviceId });
  },

  getDistrictById: (districtId) => {
    const getDistrictUrl = `${baseUrl}/api/v1/district`;
    return request.get(getDistrictUrl, { districtId });
  },

  getSubDistrictById: (subDistrictId) => {
    const getSubDistrictUrl = `${baseUrl}/api/v1/subdistrict`;
    return request.get(getSubDistrictUrl, { subDistrictId });
  },

  getStaticAll: (id) => {
    return request.all([
      module.exports.getJobTypeById(id.jobtypeId),
      module.exports.getDistrictById(id.districtId),
      module.exports.getProvinceById(id.proviceId),
      module.exports.getSubDistrictById(id.subDistrictId),
      module.exports.getEducationLevelById(id.educationLevelId),
    ]);
  },
};
