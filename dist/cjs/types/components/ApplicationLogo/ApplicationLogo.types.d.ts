import React from "react";
export interface ApplicationLogoProps {
    applicationName: "console" | "operator" | "directpv" | "kes" | "subnet" | "subnetops" | "cloud" | "releases" | "vmbroker" | "eureka" | "kms" | "loadbalancer" | "index" | "cache" | "monitor" | "observe" | "missioncontrol" | "globalconsole" | "minio" | "enterprise" | "biglakehouse" | "biglake";
    subVariant?: "simple" | "AGPL" | "standard" | "enterprise" | "new" | "enterpriseos" | "enterpriseosvertical" | "white";
    inverse?: boolean;
    onClick?: React.MouseEventHandler<any> | undefined;
}
