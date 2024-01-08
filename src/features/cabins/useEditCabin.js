const queryClient = useQueryClient();

const { isLoading: isEditing, mutate: editCabin } = useMutation({
  mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
  onSuccess: () => {
    toast.success("Cabin successfully created");
    queryClient.invalidateQueries({ queryKey: ["cabins"] });
    reset();
  },
  onError: (err) => toast.error(err.message),
});
