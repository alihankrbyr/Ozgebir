import Homepage from "views/Homepage/Homepage.js";
import Users from "views/Users/Users";
import Appointments from "views/Appointments/Appointments.js";
import Exercises from "views/Exercises/Exercises.js";
import MediaPool from "views/MediaPool/MediaPool.js";
import QuestionPool from "views/QuestionPool/QuestionPool.js";
import QuestionPoolEdit from "views/QuestionPool/QuestionPoolEdit.js";
import ActivityPool from "views/ActivityPool/ActivityPool.js";
import ActivityPoolEdit from "views/ActivityPool/ActivityPoolEdit.js";
import Shuttles from "views/Shuttles/Shuttles.js";
import FAQ from "views/FAQ/FAQ";
import Contacts from "views/Contacts/Contacts.js";
import AddShuttles from "views/Shuttles/AddShuttles";
import AddorEditAppointment from "views/Appointments/AddorEditAppointment";
import AddorEditContact from "views/Contacts/AddorEditContact";
import MediaPoolEdit from "views/MediaPool/MediaPoolEdit";
import Profile from "components/Profile/Profile.js";
import DeviceRecommendationAdd from "views/Devices/DevicesAndRecommendationsAdd";
import DeviceRecommendationEdit from "views/Devices/DevicesAndRecommendationsEdit";
import Devices from "views/Devices/DevicesAndRecommendations";
import EditFAQ from "views/FAQ/EditFAQ";
import AddFAQ from "views/FAQ/AddFAQ";
import AddUser from "views/Users/AddUser";
import EditUser from "views/Users/EditUser";
import AddExercises from "views/Exercises/AddExercises";
import RegisterExercise from "views/RegisterExercise/RegisterExercise";
import AddRegisterExercise from "views/RegisterExercise/AddRegisterExercise";
import AssignActivity from "views/AssignActivity/AssignActivity";
import AssignNewActivity from "views/AssignActivity/AssignNewActivity";

var routes = [
  {
    path: "/anasayfa",
    name: "Anasayfa",
    icon: "nc-icon nc-bank",
    component: Homepage,
    layout: "/admin",
  },
  {
    path: "/profil",
    name: "Profil",
    icon: "nc-icon nc-bank",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/kullanicilar",
    name: "Kullanıcılar",
    icon: "nc-icon nc-bullet-list-67",
    component: Users,
    layout: "/admin",
  },
  {
    path: "/kullanicilar_ekle",
    name: "Kullanıcılar",
    icon: "nc-icon nc-caps-small",
    component: AddUser,
    layout: "/admin",
  },
  {
    path: "/kullanicilar_duzenle",
    name: "Kullanıcılar",
    icon: "nc-icon nc-caps-small",
    component: EditUser,
    layout: "/admin",
  },
  {
    path: "/randevular",
    name: "Randevular",
    icon: "nc-icon nc-calendar-60",
    component: Appointments,
    layout: "/admin",
  },
  {
    path: "/egzersizler",
    name: "Egzersizler",
    icon: "nc-icon nc-trophy",
    component: Exercises,
    layout: "/admin",
  },
  {
    path: "/egzersizler_ekle",
    name: "Egzersiz Ekle",
    icon: "nc-icon nc-trophy",
    component: AddExercises,
    layout: "/admin",
  },
  {
    path: "/egzersiz_atama",
    name: "Egzersiz Atama",
    icon: "nc-icon nc-simple-add",
    component: RegisterExercise,
    layout: "/admin",
  },
  {
    path: "/egzersiz_atama_ekle",
    name: "Yeni Egzersiz Atama",
    icon: "fas fa-plus",
    component: AddRegisterExercise,
    layout: "/admin",
  },
  {
    path: "/medya_havuzu",
    name: "Medya Havuzu",
    icon: "nc-icon nc-image",
    component: MediaPool,
    layout: "/admin",
  },
  {
    path: "/medya_havuzu_duzenle",
    name: "Medya Havuzu",
    icon: "nc-icon nc-image",
    component: MediaPoolEdit,
    layout: "/admin",
  },
  {
    path: "/medya_havuzu_ekle",
    name: "Medya Havuzu",
    icon: "nc-icon nc-image",
    component: MediaPoolEdit,
    layout: "/admin",
  },
  {
    path: "/soru_havuzu",
    name: "Soru Havuzu",
    icon: "nc-icon nc-image",
    component: QuestionPool,
    layout: "/admin",
  },
  {
    path: "/soru_havuzu_duzenle",
    name: "Soru Havuzu",
    icon: "nc-icon nc-image",
    component: QuestionPoolEdit,
    layout: "/admin",
  },
  {
    path: "/soru_havuzu_ekle",
    name: "Soru Havuzu",
    icon: "nc-icon nc-image",
    component: QuestionPoolEdit,
    layout: "/admin",
  },
  {
    path: "/etkinlik_havuzu",
    name: "Etkinlik Havuzu",
    icon: "nc-icon nc-image",
    component: ActivityPool,
    layout: "/admin",
  },
  {
    path: "/etkinlik_havuzu_duzenle",
    name: "Etkinlik Havuzu",
    icon: "nc-icon nc-image",
    component: ActivityPoolEdit,
    layout: "/admin",
  },
  {
    path: "/etkinlik_havuzu_ekle",
    name: "Etkinlik Havuzu",
    icon: "nc-icon nc-image",
    component: ActivityPoolEdit,
    layout: "/admin",
  },
  {
    path: "/etkinlik_atama",
    name: "Etkinlik Atama",
    icon: "nc-icon nc-image",
    component: AssignActivity,
    layout: "/admin",
  },
  {
    path: "/etkinlik_atama_ekle",
    name: "Yeni Etkinlik Atama",
    icon: "nc-icon nc-image",
    component: AssignNewActivity,
    layout: "/admin",
  },
  {
    path: "/cihazlar_ve_oneriler_ekle",
    name: "Cihazlar ve Öneriler",
    icon: "nc-icon nc-image",
    component: DeviceRecommendationAdd,
    layout: "/admin",
  },
  {
    path: "/DeviceRecommendationEdit",
    name: "Cihazlar ve Öneriler",
    icon: "nc-icon nc-image",
    component: DeviceRecommendationEdit,
    layout: "/admin",
  },
  {
    path: "/cihazlar_ve_oneriler",
    name: "Cihazlar ve Öneriler",
    icon: "nc-icon nc-settings",
    component: Devices,
    layout: "/admin",
  },

  {
    path: "/servisler",
    name: "Servisler",
    icon: "nc-icon nc-bus-front-12",
    component: Shuttles,
    layout: "/admin",
  },
  {
    path: "/sss",
    name: "SSS",
    icon: "nc-icon nc-bulb-63",
    component: FAQ,
    layout: "/admin",
  },
  {
    path: "/sss_ekle",
    name: "Servisler",
    icon: "nc-icon nc-caps-small",
    component: AddFAQ,
    layout: "/admin",
  },
  {
    path: "/sss_duzenle",
    name: "SSS",
    icon: "nc-icon nc-caps-small",
    component: EditFAQ,
    layout: "/admin",
  },
  {
    path: "/iletisim",
    name: "İletişim",
    icon: "nc-icon nc-alert-circle-i",
    component: Contacts,
    layout: "/admin",
  },
  {
    path: "/iletisim_ekle/:id?",
    name: "İletişim",
    icon: "nc-icon nc-caps-small",
    component: AddorEditContact,
    layout: "/admin",
  },
  {
    path: "/randevular_ekle",
    name: "Randevular",
    icon: "nc-icon nc-caps-small",
    component: AddorEditAppointment,
    layout: "/admin",
  },
  {
    path: "/Servisler_ekle",
    name: "Servisler",
    icon: "nc-icon nc-caps-small",
    component: AddShuttles,
    layout: "/admin",
  },
];
export default routes;
