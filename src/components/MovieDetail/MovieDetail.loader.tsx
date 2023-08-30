import { Group, Skeleton } from "@mantine/core";
import { Fragment } from "react";

const MovieDetailLoader = () => {
  return (
    <Fragment>
      <Group style={{ gap: 50, alignItems: "start", height: "400px" }}>
        <Skeleton width="40%" height="100%" radius="sm" />
        <Group w="50%" h="100%" style={{ gap: 10 }}>
          <Skeleton height={40} radius="sm" />
          <Skeleton width="70%" height={20} radius="sm" />
          <Group w="100%">
            <Skeleton width="10%" height={20} radius="sm" />
            <Skeleton width="10%" height={20} radius="sm" />
            <Skeleton width="10%" height={20} radius="sm" />
          </Group>
          <Skeleton width="100%" height="50%" radius="sm" />
        </Group>
      </Group>
    </Fragment>
  );
};

export default MovieDetailLoader;
