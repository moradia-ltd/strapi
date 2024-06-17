/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import colorPicker from "@strapi/plugin-color-picker/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import seo from "@strapi/plugin-seo/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import countrySelect from "strapi-plugin-country-select/strapi-admin";
import importExportEntries from "strapi-plugin-import-export-entries/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    "color-picker": colorPicker,
    i18n: i18N,
    seo: seo,
    "users-permissions": usersPermissions,
    "country-select": countrySelect,
    "import-export-entries": importExportEntries,
  },
});
