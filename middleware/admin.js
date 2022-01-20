export default function ({ $strapi, redirect }) {
  if ($strapi.user.role.name != 'Admin') {
    return redirect('/')
  }
}
