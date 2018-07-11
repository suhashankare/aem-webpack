use(function () {
    'use strict';
    var model = {};
    /**
     * Generates JSON for the POST action to edit the text of the item.
     */
    function updateItemAction() {
        return JSON.stringify({
            path: String(resource.path),
            data: {
                '_charset_': 'utf-8'
            },
            // The key of the payload value that has to be added.
            append: 'jcr:title'
        });
    }
    /**
     * Generates the JSON for the POST action to remove the item.
     */
    function destroyItemAction() {
        return JSON.stringify({
            path: String(resource.path),
            data: {
                ':operation': 'delete'
            }
        });
    }
    /**
     * Generates the JSON for the POST action to mark the item as complete or active.
     */
    function toggleItemAction() {
        return JSON.stringify({
            path: String(resource.path),
            data: {
                'completed@TypeHint': 'Boolean'
            },
            // The key of the payload value that has to be added
            append: 'completed'
        });
    }
    // The JSON for the POST request of the constious actions
    model.updateItemAction = updateItemAction();
    model.destroyItemAction = destroyItemAction();
    model.toggleItemAction = toggleItemAction();
    return model;
});
