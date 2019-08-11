const TimeEdit = require("@juhosa/time-edit-api");

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  options
) => {
  const { course, baseUrl } = options;
  const te = new TimeEdit(baseUrl);
  const result = await te.getCourseEvents(course.id);

  const reservations = result.reservations;

  reservations.forEach(rese => {
    const node = {
      ...rese,
      coursename: course.name,
      id: createNodeId(`TimeEditEvent-${rese.id}`),
      internal: {
        type: "TimeEditEvent",
        contentDigest: createContentDigest(rese)
      }
    };
    actions.createNode(node);
  });
};
