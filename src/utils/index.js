/* eslint-disable import/prefer-default-export */

export const getUriParameterByName = (name, uri) => {
    const tempName = name.replace(/[[\]]/g, '\\$&');
    const regex = new RegExp(`[#&]${tempName}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(uri);

    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
