import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

/** Course APIs */

export const getCourseListUrl =
  baseUrl + '/series/optuser/course-series-eeb9d3'; //GET req

/** FAQ APIs */

export const getFaqListUrl = baseUrl + '/faqs?language=english'; //GET req

/**Tags APIs */

export const getTagListUrl = baseUrl + '/tags'; //GET req
