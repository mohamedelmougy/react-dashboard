import {  useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geo, Geodata } from "../../Constants/geoData";

const Geography = ({isDashboard = false}) => {
    const theme = useTheme();
  return (
    <ResponsiveChoropleth
    data={Geodata}
    features={geo.features}
    theme={{
      text: {
        fontSize: 11,
        fill: theme.palette.text.primary,
        outlineWidth: 0,
        outlineColor: "transparent",
      },
      axis: {
        domain: {
          line: {
            stroke: theme.palette.divider,
            strokeWidth: 1,
          },
        },
        legend: {
          text: {
            fontSize: 12,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
        },
        ticks: {
          line: {
            stroke: theme.palette.divider,
            strokeWidth: 1,
          },
          text: {
            fontSize: 11,
            fill: theme.palette.text.secondary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
        },
      },
      grid: {
        line: {
          stroke: theme.palette.divider,
          strokeWidth: 0,
        },
      },
      legends: {
        title: {
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
        },
        text: {
          fontSize: 11,
          fill: theme.palette.text.primary,
          outlineWidth: 0,
          outlineColor: "transparent",
        },
        ticks: {
          line: {},
          text: {
            fontSize: 10,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
        },
      },
      annotations: {
        text: {
          fontSize: 13,
          fill: theme.palette.text.primary,
          outlineWidth: 2,
          outlineColor: "#ffffff",
          outlineOpacity: 1,
        },
        link: {
          stroke: "#000000",
          strokeWidth: 1,
          outlineWidth: 2,
          outlineColor: "#ffffff",
          outlineOpacity: 1,
        },
        outline: {
          stroke: "#000000",
          strokeWidth: 2,
          outlineWidth: 2,
          outlineColor: "#ffffff",
          outlineOpacity: 1,
        },
        symbol: {
          fill: "#000000",
          outlineWidth: 2,
          outlineColor: "#ffffff",
          outlineOpacity: 1,
        },
      },
      tooltip: {
        wrapper: {},
        container: {
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
          fontSize: 12,
        },
        basic: {},
        chip: {},
        table: {},
        tableCell: {},
        tableCellValue: {},
      },
    }}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors="spectral"
    domain={[0, 1000000]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    projectionScale={isDashboard?90: 170}
    projectionTranslation={isDashboard?[0.5, 0.7] :[0.5, 0.7]}
    projectionRotation={[0, 0, 0]}
    enableGraticule={false}
    graticuleLineColor="#dddddd"
    borderWidth={1}
    borderColor="#fff"
    legends={
        isDashboard?undefined:[
      {
        anchor: "bottom-left",
        direction: "column",
        justify: true,
        translateX: 20,
        translateY: -30,
        itemsSpacing: 0,
        itemWidth: 94,
        itemHeight: 18,
        itemDirection: "left-to-right",
        itemTextColor: theme.palette.text.primary,
        itemOpacity: 0.85,
        symbolSize: 18,
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: theme.palette.text.secondary,
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
  )
}

export default Geography