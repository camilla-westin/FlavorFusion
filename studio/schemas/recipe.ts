import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }),
    defineField({
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'blockContent',
    }),
    defineField({
      title: 'Instuctions',
      name: 'instructions',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'cookingtime',
      title: 'Cooking time',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
