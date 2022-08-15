/*
 * ***********************************************************************
 * SPA Vue Project CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 SPA Vue Project.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of SPA Vue Project and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to SPA Vue Project
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from SPA Vue Project.
 * ***********************************************************************
 */

package com.vue.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code MyHeader} Sling Model used for the {@code vue/components/my-header} component.
 * 
 */
@ConsumerType
public interface MyHeader
    extends ComponentExporter
{


    @JsonProperty("headerText")
    String getHeaderText();

    @JsonProperty("headerTitleFirst")
    String getHeaderTitleFirst();

    @JsonProperty("headerTitleSecond")
    String getHeaderTitleSecond();

    @JsonProperty("headerTitleThird")
    String getHeaderTitleThird();

    @JsonProperty("headerTitleSuccess")
    String getHeaderTitleSuccess();

    @JsonProperty("headerTextColor")
    String getHeaderTextColor();

    @JsonProperty("headerFont")
    String getHeaderFont();

    @JsonProperty("headerColor")
    String getHeaderColor();

    @JsonProperty("headerColorBorder")
    String getHeaderColorBorder();

}
