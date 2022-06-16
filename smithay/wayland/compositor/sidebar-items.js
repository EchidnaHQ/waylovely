initSidebarItems({"enum":[["BufferAssignment","New buffer assignation for a surface"],["Damage","Description of a part of a surface that should be considered damaged and needs to be redrawn"],["RectangleKind","Kind of a rectangle part of a region"],["TraversalAction","Possible actions to do after handling a node during tree traversal"]],"fn":[["add_destruction_hook","Register a destruction hook to be invoked on surface destruction"],["add_post_commit_hook","Register a post-commit hook to be invoked on surface commit"],["add_pre_commit_hook","Register a pre-commit hook to be invoked on surface commit"],["get_children","Retrieve the children of this surface"],["get_parent","Retrieve the parent of this surface"],["get_region_attributes","Retrieve the metadata associated with a `wl_region`"],["get_role","Get the current role of this surface"],["give_role","Register that this surface has given role"],["is_sync_subsurface","Check if this subsurface is a synchronized subsurface"],["with_states","Access the states associated to this surface"],["with_surface_tree_downward","Access the data of a surface tree from top to bottom"],["with_surface_tree_upward","Access the data of a surface tree from bottom to top"]],"struct":[["AlreadyHasRole","An error type signifying that the surface already has a role and cannot be assigned an other"],["CompositorState","State of a compositor"],["MultiCache","A typemap-like container for double-buffered values"],["RegionAttributes","Description of the contents of a region"],["RegionUserData","User data of WlRegion"],["SubsurfaceCachedState","The cached state associated with a subsurface"],["SubsurfaceUserData","User data of WlSubsurface"],["SurfaceAttributes","General state associated with a surface"],["SurfaceData","The state container associated with a surface"],["SurfaceUserData","User data for WlSurface"]],"trait":[["Cacheable","Trait representing a value that can be used in double-buffered storage"],["CompositorHandler","Handler trait for compositor"]]});