# Gatsby-source-timeedit

## Description

A GatsbyJS source plugin for retrieving data for a specific course from TimeEdit.


## Installing

```shell
yarn add gatsby-source-timeedit
```

## When do I use this plugin?

Use this plugin when you need timetable events for a single course from TimeEdit.

## Usage

In your `gatsby-config.js`:

```javascript
module.exports = {
    plugins: [
        {
        resolve: "gatsby-source-timeedit",
        options: {
            baseUrl: "https://cloud.timeedit.net/<your_org>/web/public",
            course: {
                id: "38238923.23",
                name: "Programming basics",
                },
            },
        }
    ]
}
```

Use the below code snippet to get the course id when you are in the 'Implementations´ schedules' page (paste it in the console).

```javascript
document.getElementById('linksdata').attributes['data-searchidsenc'].nodeValue
```

## Query data

```graphql
      query TimeEditEventQuery {
        allTimeEditEvent {
          nodes {
            id
            startdate(formatString: "dddd D.M.")
            starttime
            endtime
            additional_info {
              Room
              Group__Small_group__Group_of_groups
            }
            coursename
          }
        }
      }
```