const BASE_URL = "https://covid19.mathdro.id/api"

const ENDPOINTS = {
    GLOBAL: `${BASE_URL}`,
    INDONESIA: `${BASE_URL}/countries/indonesia`,
    SUM: `${BASE_URL}/og`,
    SUMID: `${BASE_URL}/countries/indonesia/og`,
};

export default ENDPOINTS;