export default function ({ $strapi, redirect }) {
  if (!$strapi.user) {
    return redirect('/')
  }
  if ($strapi.user.role.name != 'Admin') {
    return redirect('/')
  }
}
