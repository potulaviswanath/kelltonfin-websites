document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
         * Find all category buttons.
         */

        const categoryButtons =
            document.querySelectorAll(
                ".hapl-category"
            );


        /*
         * Find all right-side category panels.
         */

        const categoryPanels =
            document.querySelectorAll(
                ".hapl-category-section"
            );


        /*
         * Add click event to each category.
         */

        categoryButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function (event) {

                        /*
                         * Prevent the "#" link
                         * from changing the URL.
                         */

                        event.preventDefault();


                        /*
                         * Determine which panel
                         * should be displayed.
                         */

                        const targetId =
                            button.getAttribute(
                                "data-category"
                            );


                        /*
                         * Remove active state
                         * from every category.
                         */

                        categoryButtons.forEach(
                            function (item) {

                                item.classList.remove(
                                    "active"
                                );

                                item.setAttribute(
                                    "aria-selected",
                                    "false"
                                );

                            }
                        );


                        /*
                         * Hide every right-side panel.
                         */

                        categoryPanels.forEach(
                            function (panel) {

                                panel.classList.remove(
                                    "is-visible"
                                );

                            }
                        );


                        /*
                         * Activate selected category.
                         */

                        button.classList.add(
                            "active"
                        );

                        button.setAttribute(
                            "aria-selected",
                            "true"
                        );


                        /*
                         * Show selected panel.
                         */

                        const targetPanel =
                            document.getElementById(
                                targetId
                            );


                        if (targetPanel) {

                            targetPanel.classList.add(
                                "is-visible"
                            );

                        }

                    }
                );

            }
        );

    }
);
