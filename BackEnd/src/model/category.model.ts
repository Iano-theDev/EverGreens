
class CategoryModel {
    id: string;
    name: string;
    is_top_level: string;
    
    constructor(id: string, name: string, is_top_level: string) {
        this.id = id;
        this.name = name;
        this.is_top_level = is_top_level;
    }
    }

export default CategoryModel;